package com.dynamiccode.medilogix.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dynamiccode.medilogix.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    User findByUid(Long uid);

    void deleteByUid(Long uid);

}
