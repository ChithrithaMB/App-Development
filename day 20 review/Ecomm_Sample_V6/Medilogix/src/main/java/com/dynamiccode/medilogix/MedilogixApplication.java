package com.dynamiccode.medilogix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@EnableFeignClients
@SpringBootApplication
public class MedilogixApplication {

	public static void main(String[] args) {
		SpringApplication.run(MedilogixApplication.class, args);
	}

}
