package com.iamneo.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@EnableConfigServer
@SpringBootApplication
public class MediServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(MediServerApplication.class, args);
	}

}
