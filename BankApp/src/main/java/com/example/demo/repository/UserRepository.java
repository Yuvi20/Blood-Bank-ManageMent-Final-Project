package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.User;

public interface UserRepository extends JpaRepository<User,Integer> {
	
	Optional<User> findOneByEmailAndPassword(String email, String password);
	
	User findByEmail(String email);
	
	

}
