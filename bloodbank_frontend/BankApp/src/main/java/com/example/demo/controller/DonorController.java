package com.example.demo.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Donor;
import com.example.demo.service.DonorService;




@CrossOrigin
@RestController
@RequestMapping("/api/donors")
public class DonorController 
{

    @Autowired
    private DonorService donorService;
    
 
    public DonorController(@Autowired DonorService donorService)
	{
		this.donorService = donorService;
	}

    
    @GetMapping("/donorlist")
	public ResponseEntity<List<Donor>>getAllDonors() throws Exception
	{
		List<Donor> donors = donorService.getAllDonors();
		return new ResponseEntity<List<Donor>>(donors, HttpStatus.OK);
	}
    
    

    @GetMapping("/{dId}")
    public Donor getDonorById(@PathVariable int dId) throws Exception
    {
        return donorService.getDonorById(dId);
    }
    

   
    
    @PostMapping("/add")
    public ResponseEntity<Donor> addDonor(@RequestBody Donor donor) throws Exception
    {
        Donor addedDonor = donorService.addDonor(donor);
        return new ResponseEntity<>(addedDonor, HttpStatus.CREATED);
    }
    
    
    /*
    @PostMapping("/add")
    public ResponseEntity<String> addDonor(@RequestBody Donor donor)throws Exception 
    {
        donorService.addDonor(donor);
        return ResponseEntity.ok("Donor added successfully");
    }*/
   

    @DeleteMapping("/{dId}")
    public void deleteDonor(@PathVariable int dId) throws Exception
    {
        donorService.deleteDonor(dId);
      
    }
    
    @PutMapping("/update/{dId}")
    public ResponseEntity<Donor> updateDonor(@PathVariable int dId, @RequestBody Donor donor)throws Exception 
    {
        Donor updatedDonor = donorService.updateDonor(dId, donor);
        if (updatedDonor != null)
        {
            return new ResponseEntity<>(updatedDonor, HttpStatus.OK);
            
        } 
        else 
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    
    
   
 /*
    @GetMapping("/{bloodGroup}")
    public Donor findByBloodGroup(@PathVariable String bloodGroup) {
        return donorService.findByBloodGroup(bloodGroup);
    }
    */
    
}