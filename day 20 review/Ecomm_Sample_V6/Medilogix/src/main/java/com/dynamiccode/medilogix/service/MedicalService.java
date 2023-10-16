package com.dynamiccode.medilogix.service;

import com.dynamiccode.medilogix.model.Medical;
import com.dynamiccode.medilogix.repository.MedicalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MedicalService {

    @Autowired
    private MedicalRepository medicalRepository;

    public Medical saveMedical(Medical medical) {
        return medicalRepository.save(medical);
    }

    public List<Medical> getAllMedicals() {
        return medicalRepository.findAll();
    }

    public Optional<Medical> getMedicalById(long id) {
        return medicalRepository.findById(id);
    }

    public void deleteMedical(long id) {
        medicalRepository.deleteById(id);
    }

    public Medical updateMedical(Medical medical) {
        return medicalRepository.save(medical);
    }
}
