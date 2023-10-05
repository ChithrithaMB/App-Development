
package com.example.dynamiccode.ServiceInt;

import java.util.List;

import com.example.dynamiccode.Model.DoctorModel;

public interface DoctorService{

	public abstract List<DoctorModel> getDoctors();

	public abstract DoctorModel createDoctor(DoctorModel doctorModel);

	public abstract void updateDoctor(DoctorModel doctorModel);

	public abstract void deleteDoctor(Integer doctorId);

	public abstract boolean isDoctorExist(String doctorName);

	public abstract boolean isDoctorExistbyid(int doctorId);

    public abstract DoctorModel getDoctorbyid(int doctorId);

    public abstract List<DoctorModel> getDoctorbyname(String doctorName);
	
}