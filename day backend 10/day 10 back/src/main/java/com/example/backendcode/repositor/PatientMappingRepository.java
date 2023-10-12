package com.example.backendcode.repositor;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendcode.model.PatientMapping;



public interface PatientMappingRepository extends JpaRepository<PatientMapping, Long> {

}
