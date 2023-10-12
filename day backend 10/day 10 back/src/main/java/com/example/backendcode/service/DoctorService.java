package com.example.backendcode.service;

import java.util.List;

import com.example.backendcode.dto.request.DoctorRequest;
import com.example.backendcode.dto.response.DoctorResponse;
import com.example.backendcode.model.Doctor;



public interface DoctorService {

    boolean saveDoctor(DoctorRequest request);

    List<DoctorResponse> getAllDoctors();

    DoctorResponse getDoctor(Long did);

    DoctorResponse updateDoctor(DoctorRequest request, Long did);

    boolean deleteDoctor(Long did);

    Doctor getDoctorModelId(Long did);

}
