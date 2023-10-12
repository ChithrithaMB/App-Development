package com.example.backendcode.repositor;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendcode.model.Patient;



public interface PatientRepository extends JpaRepository<Patient, Long> {

    void deleteByUserUid(Long uid);

}
