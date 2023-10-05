package com.dynamiccode.medilogix.dto.response;

import com.dynamiccode.medilogix.model.enu.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private Long uid;
    private String name;
    private String email;
    private Boolean isEnabled;
    private Role role;
	public static Object builder() {
		// TODO Auto-generated method stub
		return null;
	}
}