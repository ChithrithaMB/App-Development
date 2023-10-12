package com.example.backendcode.repositor;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backendcode.model.Doctor;



public interface DoctorRepository extends JpaRepository<Doctor, Long> {

    Optional<Doctor> findByDoctorName(String doctorName);

    Doctor findByDid(Long did);

    void deleteByDid(Long did);

}
