package com.example.demo.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.AdminDto;
import com.example.demo.dto.LoginDto;
import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepository;
import com.example.demo.response.LoginResponse;



@Service
public class AdminServiceImpl implements AdminService 
{
	
	@Autowired
    private AdminRepository adminRepository;
	
	
    public AdminServiceImpl(@Autowired AdminRepository adminRepository)
	{
			this.adminRepository = adminRepository;
	}
   
//    @Autowired
//    private PasswordEncoder passwordEncoder;

    
	@Override
	public String saveAdmin(AdminDto adminDto) 
	{
		Admin admin = new Admin(
				 adminDto.getAdminId(),
				 adminDto.getName(),
				 adminDto.getMobile(),
				 adminDto.getGender(),
				 adminDto.getAge(),
				 adminDto.getAddress(),
				 adminDto.getEmail(),
				 adminDto.getPassword(),         
	             adminDto.getcPassword()
	             // this.passwordEncoder.encode(adminDto.getPassword()),
	            
	        );
		adminRepository.save(admin);
//		System.out.println(adminDto.getcPassword()+"cpassword");
	    //return admin.getName();
		return "Admin Register Succesfully";
	}

	
	
	@Override
	public LoginResponse loginAdmin(LoginDto loginDto) {
		 String msg = "";
	        Admin admin1 = adminRepository.findByEmail(loginDto.getEmail());
	        if (admin1 != null) 
	        {
	            String password = loginDto.getPassword();
	            String encodedPassword = admin1.getPassword();
//	            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
	            Boolean isPwdRight=password.equals(encodedPassword);
	            if (isPwdRight) 
	            {
	                Optional<Admin> admin = adminRepository.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
	                if (admin.isPresent()) 
	                {
	                    return new LoginResponse("Login Success", true);
	                } 
	                else 
	                {
	                    return new LoginResponse("Login Failed", false);
	                }
	            }
	            else 
	            {
	                return new LoginResponse("password Not Match", false);
	            }
	        }
	        else 
	        {
	            return new LoginResponse("Email not exits", false);
	        }
	}



	@Override
	public List<Admin> getAllAdmins() {
		
		return (List<Admin>)adminRepository.findAll();
	}



	@Override
	public void deleteAdmin(int adminId) {
		adminRepository.deleteById(adminId);
		
	}



	@Override
	public Admin getAdminById(int adminId) {
		
		return adminRepository.findById(adminId).orElse(null);
	}



	@Override
	public Admin updateAdmin(int adminId, Admin updatedAdmin) 
	{
		 Admin existingAdmin = adminRepository.findById(adminId).orElse(null);
	        if (existingAdmin != null) 
	        {
	            // Update fields as needed
	        	existingAdmin.setUserName(updatedAdmin.getName());
	        	existingAdmin.setMobile(updatedAdmin.getMobile());
	        	existingAdmin.setGender(updatedAdmin.getGender());
	        	existingAdmin.setAge(updatedAdmin.getAge());
	        	existingAdmin.setAddress(updatedAdmin.getAddress());
	        	existingAdmin.setEmail(updatedAdmin.getEmail());
//	        	existingAdmin.setPassword(passwordEncoder.encode(updatedAdmin.getPassword()));
	        	existingAdmin.setPassword(updatedAdmin.getPassword());
	            // Encrypt new password
	            existingAdmin.setcPassword(updatedAdmin.getcPassword());
	            return adminRepository.save(existingAdmin);
	        }
	        return null; // Admin not found
	}
	
	

}