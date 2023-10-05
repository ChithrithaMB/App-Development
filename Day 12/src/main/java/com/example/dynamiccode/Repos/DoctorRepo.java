

package com.example.dynamiccode.Repos;
import org.springframework.data.repository.CrudRepository;

import com.example.dynamiccode.Model.DoctorModel;

import java.util.List;

public interface DoctorRepo extends CrudRepository<DoctorModel, Integer>
{

	boolean existsByDoctorNameIgnoreCase(String doctorName);

    List<DoctorModel> findByDoctorNameContainingIgnoreCase(String doctorName);
}