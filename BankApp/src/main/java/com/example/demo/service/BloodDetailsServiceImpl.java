package com.example.demo.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BloodDetails;
import com.example.demo.repository.BloodDetailsRepository;



@Service
public class BloodDetailsServiceImpl implements BloodDetailsService 
{

	@Autowired
	BloodDetailsRepository bloodDetailsRepository;

    public BloodDetailsServiceImpl(@Autowired BloodDetailsRepository bloodDetailsRepository) {
        this.bloodDetailsRepository = bloodDetailsRepository;
    }

  
    
    @Override
    public BloodDetails saveBloodDetails(BloodDetails bloodDetails) {
        return bloodDetailsRepository.save(bloodDetails);
    }

    @Override
    public BloodDetails getBloodDetailsById(int id) {
        return bloodDetailsRepository.findById(id).orElse(null);
    }




	@Override
	public List<BloodDetails> getAllBloodDetails() {
		// TODO Auto-generated method stub
		return (List<BloodDetails>)bloodDetailsRepository.findAll();
	}


//
//	@Override
//	public BloodDetails saveBloodDetails(BloodDetails bloodDetails) {
//		// TODO Auto-generated method stub
//		return null;
//	}


	

	
	
	
	/*
	
	public BloodDetails findByBloodGroup(String bloodGroup)
	{
		 return bloodDetailsRepository.findByBloodGroup(bloodGroup);
	}*/

    
	/*@Override
	public BloodDetails getBloodDetailsByGroup(String bloodGroup) {
		// TODO Auto-generated method stub
		 return bloodDetailsRepository.findByBloodGroup(bloodGroup).orElse(null);
	}*/

}
