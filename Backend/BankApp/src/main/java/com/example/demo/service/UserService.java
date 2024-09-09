package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.response.LoginResponse;

public interface UserService {
	 String saveUser(UserDto userDto);
	 LoginResponse loginUser(LoginDto loginDto);
	 
	 List<User> getAllUsers();
	 void deleteUser(int userId);
	 User getUserById(int userId);
	 
	 User updateUser(int userId, User updatedUser);
	 
}
