package com.dynamiccode.medilogix.repository;

import com.dynamiccode.medilogix.model.Medical;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MedicalRepository extends JpaRepository<Medical, Long> {
    // Add custom query methods if needed
}
