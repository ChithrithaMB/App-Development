package com.example.backendcode.dto.request;

import java.util.List;

import com.example.backendcode.dto.info.DoctorInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PatientRequest {
    private String patAddress;
    private String paymentMode;
    private Long uid;
    private List<DoctorInfo> doctors;
}
