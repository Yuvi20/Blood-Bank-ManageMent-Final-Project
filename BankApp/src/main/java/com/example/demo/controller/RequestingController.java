package com.example.demo.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Requesting;
import com.example.demo.service.RequestingService;


@RestController
@CrossOrigin
@RequestMapping("api/requests")
public class RequestingController
{
	@Autowired
	RequestingService requestingService;

	public RequestingController(RequestingService requestingService) {
        this.requestingService = requestingService;
    }

   
    
	@PostMapping("/add")
	public Requesting addNewBloodRequest(@RequestBody Requesting request) throws Exception
	{
		return requestingService.saveBloodRequest(request);
	}
    
 
    
    
    @GetMapping("/requestlist")
   	public ResponseEntity<List<Requesting>> getAllRequests() throws Exception
   	{
   		List<Requesting> reuests = requestingService.getAllRequests();
   		return new ResponseEntity<List<Requesting>>(reuests, HttpStatus.OK);
   	}
    
    
    
    
    
    /*
	@GetMapping("/acceptstatus/{email}")
	public ResponseEntity<List<String>> updateStatus(@PathVariable String email) throws Exception
	{
		requestingService.updateStatus(email);
		List<String> al=new ArrayList<>();
		al.add("accepted");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}
	
	
	@GetMapping("/rejectstatus/{email}")
	public ResponseEntity<List<String>> rejectStatus(@PathVariable String email) throws Exception
	{
		requestingService.rejectStatus(email);
		List<String> al=new ArrayList<>();
		al.add("rejected");
		return new ResponseEntity<List<String>>(al,HttpStatus.OK);
	}*/

}

