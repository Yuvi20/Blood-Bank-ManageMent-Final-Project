package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.response.LoginResponse;




@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;
	private Object passwordEncoder;

	@Override
	public String saveUser(UserDto userDto) {
		User user = new User(
				 userDto.getUserId(),
				 userDto.getName(),
				 userDto.getMobile(),
				 userDto.getGender(),
				 userDto.getAge(),
				 userDto.getAddress(),
				 userDto.getEmail(),
				 userDto.getPassword(),
				 userDto.getcPassword()
//	             ((PasswordEncoder)passwordEncoder).encode(userDto.getPassword()),
//	             userDto.getcPassword()
	        );
		userRepository.save(user);
	   // return user.getUsername();
		return "Registration completed  Succesfully";
	}
	public LoginResponse loginUser(LoginDto loginDto) {
	    System.out.println("Attempting to find user with email: " + loginDto.getEmail());
	    User user = userRepository.findByEmail(loginDto.getEmail());
	    
	    if (user != null) {
	        System.out.println("User found: " + user.getEmail());
	        String password = loginDto.getPassword();
	        String encodedPassword = user.getPassword();
	        
	        Boolean isPwdRight = password.equals(encodedPassword);
	        
	        if (isPwdRight) {
	            Optional<User> validUser = userRepository.findOneByEmailAndPassword(loginDto.getEmail(), encodedPassword);
	            if (validUser.isPresent()) {
	                return new LoginResponse("Login Success", true);
	            } else {
	                return new LoginResponse("Login Failed", false);
	            }
	        } else {
	            return new LoginResponse("Password does not match", false);
	        }
	    } else {
	        System.out.println("No user found with email: " + loginDto.getEmail());
	        return new LoginResponse("Email does not exist", false);
	    }
	}


	@Override
	public List<User> getAllUsers() 
	{
		return (List<User>)userRepository.findAll();
	}



	@Override
	public void deleteUser(int userId)
	{
		userRepository.deleteById(userId);
			
	}

	@Override
	public User getUserById(int userId) 
	{
		 return userRepository.findById(userId).orElse(null);
	}

	
	@Override
    public User updateUser(int userId, User updatedUser) 
	{
        User existingUser = userRepository.findById(userId).orElse(null);
        if (existingUser != null) 
        {
            // Update fields as needed
        	existingUser.setUserName(updatedUser.getName());
        	existingUser.setMobile(updatedUser.getMobile());
        	existingUser.setGender(updatedUser.getGender());
        	existingUser.setAge(updatedUser.getAge());
        	existingUser.setAddress(updatedUser.getAddress());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPassword(updatedUser.getPassword());
            // Encrypt new password
            existingUser.setcPassword(updatedUser.getcPassword());
            return userRepository.save(existingUser);
        }
        return null; // User not found
    }
}
	

 
