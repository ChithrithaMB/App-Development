package com.medical.main.repository;

import com.medical.main.model.Medical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long> {
    // Add custom query methods if needed
}
