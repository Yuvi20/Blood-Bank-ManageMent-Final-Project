package com.example.demo.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.BloodDetails;
import com.example.demo.service.BloodDetailsService;



@CrossOrigin
@RestController
@RequestMapping("api/bloodDetails")
public class BloodDetailsController
{
	@Autowired
    BloodDetailsService bloodDetailsService;

    
    public BloodDetailsController(@Autowired BloodDetailsService bloodDetailsService) 
    {
        this.bloodDetailsService = bloodDetailsService;
    }
    
    
    @GetMapping("/AllBloodDetails")
    public List<BloodDetails> getAllBloodDetails()throws Exception
    {
        return bloodDetailsService.getAllBloodDetails();
    }
    
    @PostMapping("/save")
    public BloodDetails saveBloodDetails(@RequestBody BloodDetails bloodDetails)throws Exception
    {
        return bloodDetailsService.saveBloodDetails(bloodDetails);
    }

    @GetMapping("/{id}")
    public BloodDetails getBloodDetailsById(@PathVariable int id) throws Exception
    {
        return bloodDetailsService.getBloodDetailsById(id);
    }
//    @DeleteMapping("/{dId}")
    
//    
//    
    /*
    @GetMapping("/{bloodGroup}")
    public BloodDetails getBloodDetailsByGroup(@PathVariable String bloodGroup) {
        return bloodDetailsService.findByBloodGroup(bloodGroup);
    }*/
}
