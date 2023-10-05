
package com.example.dynamiccode.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dynamiccode.Model.DoctorModel;
import com.example.dynamiccode.Repos.DoctorRepo;
import com.example.dynamiccode.ServiceInt.DoctorService;

@Service
public class DoctorServiceInt implements DoctorService{
	
	@Autowired
	private DoctorRepo doctorRepo;

	@Override
	public List<DoctorModel> getDoctors() {
		return (List<DoctorModel>)doctorRepo.findAll();
	}

	@Override
	public DoctorModel createDoctor(DoctorModel doctorModel) {
		return doctorRepo.save(doctorModel);
	}

	@Override
	public void deleteDoctor(Integer doctorId) {
		doctorRepo.deleteById(doctorId);
	}

	@Override
	public void updateDoctor(DoctorModel doctorModel) {
		doctorRepo.save(doctorModel);
	}

	@Override
	public boolean isDoctorExist(String doctorName) {
		return doctorRepo.existsByDoctorNameIgnoreCase(doctorName);
	}

	@Override
	public boolean isDoctorExistbyid(int doctorId) {
		return doctorRepo.existsById(doctorId);
	}

	@Override
	public DoctorModel getDoctorbyid(int doctorId) {
		Optional<DoctorModel> optional = doctorRepo.findById(doctorId);
		DoctorModel doctorModel = optional.get();
		return doctorModel;
	}
	
	@Override
	public List<DoctorModel> getDoctorbyname(String doctorName) 
	{
		return (List<DoctorModel>) doctorRepo.findByDoctorNameContainingIgnoreCase(doctorName);
	}
	
}