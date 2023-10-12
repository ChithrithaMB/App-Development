package com.example.backendcode.service;

import com.example.backendcode.dto.request.PatientRequest;

public interface PatientService {

    boolean savePatient(PatientRequest request);

}
