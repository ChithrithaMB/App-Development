package com.medical.main.Controller;

import com.medical.main.constant.Api;
import com.medical.main.model.Medical;
import com.medical.main.service.MedicalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(Api.MEDICAL)
public class MedicalController {

    @Autowired
    private MedicalService medicalService;

    @PostMapping("/doctor")
    public ResponseEntity<Medical> createMedical(@RequestBody Medical medical) {
        Medical createdMedical = medicalService.saveMedical(medical);
        return new ResponseEntity<>(createdMedical, HttpStatus.CREATED);
    }

    @GetMapping("/getDoctor")
    public ResponseEntity<List<Medical>> getAllMedicals() {
        List<Medical> medicalList = medicalService.getAllMedicals();
        return new ResponseEntity<>(medicalList, HttpStatus.OK);
    }

    @GetMapping("/getDoctor/{id}")
    public ResponseEntity<Medical> getMedicalById(@PathVariable long id) {
        Optional<Medical> medical = medicalService.getMedicalById(id);
        return medical.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/putDoctor/{id}")
    public ResponseEntity<Medical> updateMedical(@RequestBody Medical medical) {
        Medical updatedMedical = medicalService.updateMedical(medical);
        return new ResponseEntity<>(updatedMedical, HttpStatus.OK);
    }

    @DeleteMapping("/deleteDoctor/{id}")
    public ResponseEntity<Void> deleteMedical(@PathVariable long id) {
        medicalService.deleteMedical(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
