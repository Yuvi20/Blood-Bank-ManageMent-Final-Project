package com.example.demo.service;


import java.util.List;

import com.example.demo.entity.Donor;

public interface DonorService 
{

	    List<Donor> getAllDonors();

	    Donor getDonorById(int dId);

	    Donor addDonor(Donor donor);

	    void deleteDonor(int dId);

		Donor updateDonor(int dId, Donor donor);

		

		//Donor findByBloodGroup(String bloodGroup);

		
	    
	    
		
	    

	    
	   /* Donor findByBloodGroup(String bloodGroup);
		
		Donor findByGender(String gender);*/
}
