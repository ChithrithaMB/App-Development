package com.example.backendcode.service.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.backendcode.dto.info.DoctorInfo;
import com.example.backendcode.dto.request.PatientRequest;
import com.example.backendcode.model.Doctor;
import com.example.backendcode.model.Patient;
import com.example.backendcode.model.PatientMapping;
import com.example.backendcode.model.User;
import com.example.backendcode.repositor.DoctorRepository;
import com.example.backendcode.repositor.PatientRepository;
import com.example.backendcode.repositor.UserRepository;
import com.example.backendcode.service.DoctorService;
import com.example.backendcode.service.PatientService;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {

    private final UserRepository userRepository;
    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private final DoctorService doctorService;

    @Override
    public boolean savePatient(PatientRequest request) {
        User user = userRepository.findByUid(request.getUid());
        List<DoctorInfo> doctorInfoList = request.getDoctors();
        long appointTime = calculateappointTime(doctorInfoList);

        if (appointTime <= 0) {
            throw new IllegalArgumentException("Patient appointTime must be greater than zero.");
        }

        try {
            Patient patient = createPatient(request, user, appointTime, doctorInfoList);
            patientRepository.save(patient);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    private Patient createPatient(PatientRequest request, User user, long appointTime, List<DoctorInfo> doctorInfoList) {
        Patient patient = Patient.builder()
                .appointDate(new Date())
                .patAddress(request.getPatAddress())
                .paymentMode(request.getPaymentMode())
                .user(user)
                .appointTime(appointTime)
                .patientMappings(request.getDoctors().stream()
                        .map(doctorRequest -> {
                            Doctor doctor = doctorService.getDoctorModelId(doctorRequest.getDid());
                            if (doctor != null) {
                                return PatientMapping.builder().doctor(doctor).build();
                            } else {
                                throw new IllegalArgumentException("Invalid doctor ID: " + doctorRequest.getDid());
                            }
                        })
                        .collect(Collectors.toList()))
                .build();

        updateDoctorQuantities(doctorInfoList);

        return patient;
    }

    private List<Doctor> updateDoctorQuantities(List<DoctorInfo> doctorInfoList) {
        List<Doctor> updatedDoctors = new ArrayList<>();

        for (DoctorInfo doctorInfo : doctorInfoList) {
            Long doctorId = doctorInfo.getDid();
            Long yearsofExp = doctorInfo.getYearsofExp();

            Doctor doctor = getDoctorOrThrow(doctorId);

            if (doctor.getYearsofExp() < yearsofExp) {
                throw new IllegalArgumentException("Insufficient yearsofExp for doctor ID: " + doctorId);
            }

            Doctor updatedDoctor = createUpdatedDoctor(doctor, yearsofExp);
            doctorRepository.save(updatedDoctor);
            updatedDoctors.add(updatedDoctor);
        }

        return updatedDoctors;
    }

    private Doctor getDoctorOrThrow(Long doctorId) {
        return doctorRepository.findById(doctorId)
                .orElseThrow(() -> new IllegalArgumentException("Doctor not found for ID: " + doctorId));
    }

    private Doctor createUpdatedDoctor(Doctor doctor, Long yearsofExp) {
        Doctor updatedDoctor = new Doctor();
        updatedDoctor.setDid(doctor.getDid());
        updatedDoctor.setDoctorName(doctor.getDoctorName());
        updatedDoctor.setDoctorSalary(doctor.getDoctorSalary());
        updatedDoctor.setYearsofExp(doctor.getYearsofExp() - yearsofExp);
        updatedDoctor.setDocDept(doctor.getDocDept());
        updatedDoctor.setDocSpec(doctor.getDocSpec());
        return updatedDoctor;
    }

    private long calculateappointTime(List<DoctorInfo> doctorInfoList) {
        return doctorInfoList.stream()
                .mapToLong(doctorInfo -> {
                    Doctor doctor = getDoctorOrThrow(doctorInfo.getDid());
                    if (doctor.getYearsofExp() < doctorInfo.getYearsofExp()) {
                        throw new IllegalArgumentException(
                                "Insufficient yearsofExp for doctor ID: " + doctorInfo.getDid());
                    }
                    return (long) (doctor.getDoctorSalary() * doctorInfo.getYearsofExp());
                })
                .sum();
    }
}
