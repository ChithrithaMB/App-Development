package com.dynamiccode.medilogix.service;

import com.dynamiccode.medilogix.dto.request.AuthenticationRequest;
import com.dynamiccode.medilogix.dto.request.RegisterRequest;
import com.dynamiccode.medilogix.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
