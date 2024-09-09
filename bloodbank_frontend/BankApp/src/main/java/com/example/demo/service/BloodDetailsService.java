package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.BloodDetails;



public interface BloodDetailsService 
{
	 BloodDetails saveBloodDetails(BloodDetails bloodDetails);
	 
     BloodDetails getBloodDetailsById(int id);
     
     List<BloodDetails> getAllBloodDetails();
     
     //BloodDetails findByBloodGroup(String bloodGroup);
     
     //BloodDetails getBloodDetailsByGroup(String bloodGroup);

}
