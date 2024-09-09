package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Donor;


@EnableJpaRepositories
@Repository
public interface DonorRepository extends JpaRepository<Donor, Integer>
{
    
	// Donor findByBloodGroup(String bloodGroup);
   
	//Donor findByGender(String gender);
	
	
    

	
		
}
