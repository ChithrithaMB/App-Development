package com.medical.main.service;

import com.medical.main.dto.request.AuthenticationRequest;
import com.medical.main.dto.request.RegisterRequest;
import com.medical.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
