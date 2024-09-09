package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.AdminDto;
import com.example.demo.dto.LoginDto;
import com.example.demo.entity.Admin;
import com.example.demo.response.LoginResponse;



public interface AdminService 
{
	 String saveAdmin(AdminDto adminDto);
	 LoginResponse loginAdmin(LoginDto loginDto);
	 
	
	 List<Admin> getAllAdmins();
	 void deleteAdmin(int adminId);
	 Admin getAdminById(int adminId);
	  
	 Admin updateAdmin(int adminId, Admin updatedAdmin);
	 
}
