package com.example.demo.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BloodDetails;
import com.example.demo.entity.Donor;
import com.example.demo.repository.BloodDetailsRepository;
import com.example.demo.repository.DonorRepository;


@Service
public class DonorServiceImpl implements DonorService
{
	 @Autowired
	 private DonorRepository donorRepository;
	 @Autowired
	 private BloodDetailsRepository bloodDetailsRepository;

	 public DonorServiceImpl(@Autowired DonorRepository donorRepository, BloodDetailsRepository bloodDetailsRepository)
	 {
	     this.donorRepository = donorRepository;
	     this.bloodDetailsRepository = bloodDetailsRepository;
	 }
	
	
	@Override
    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    @Override
    public Donor getDonorById(int dId) {
        return donorRepository.findById(dId).orElse(null);
    }

   

    @Override
    public void deleteDonor(int dId) {
        donorRepository.deleteById(dId);
       
    }


	@Override
	public Donor addDonor(Donor donor) 
	{
		 BloodDetails bloodDetails = bloodDetailsRepository.findByBloodGroup(donor.getBloodGroup());

	        if (bloodDetails == null) 
	        {
	            // Blood group not found, create a new BloodDetails entry
	            bloodDetails = new BloodDetails();
	            bloodDetails.setBloodGroup(donor.getBloodGroup());
	            bloodDetails.setUnitsAvailable(donor.getUnitsOfBlood());
	           
	        } 
	        else 
	        {
	            // Blood group found, update unitsAvailable
	            bloodDetails.setUnitsAvailable(bloodDetails.getUnitsAvailable() + donor.getUnitsOfBlood());
	            bloodDetails.setNoOfDonors(bloodDetails.getNoOfDonors() + 1);

	        }

	        // Save BloodDetails
	        bloodDetailsRepository.save(bloodDetails);

	        // Save the donor
	        return donorRepository.save(donor);
	}


	 @Override
	 public Donor updateDonor(int  dId, Donor donor) 
	 {
	        if (donorRepository.existsById(dId))
	        {
	            donor.setdId(dId);
	            return donorRepository.save(donor);
	        }
	        
	        return null; // Handle not found scenario
	 }


//	@Override
//	public Donor addDonor(Donor donor) {
//		// TODO Auto-generated method stub
//		return null;
//	}
//
//
//	@Override
//	public Donor updateDonor(int dId, Donor donor) {
//		// TODO Auto-generated method stub
//		return null;
//	}

       

	/*
	@Override
	public Donor findByBloodGroup(String bloodGroup) {
		
		return donorRepository.findByBloodGroup(bloodGroup);
		
	}*/

/*

	@Override
	public Donor findByGender(String gender) {
		
		return donorRepository.findByGender(gender);
	}
	*/
	 


}

	

