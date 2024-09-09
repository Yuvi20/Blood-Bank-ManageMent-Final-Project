package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Requesting;



public interface RequestingService 
{

	List<Requesting> getAllRequests();

	Requesting saveBloodRequest(Requesting request);
	
	
	//void updateStatus(String email);

	//void rejectStatus(String email);
}
