package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.example.demo.dto.LoginDto;
import com.example.demo.dto.UserDto;
import com.example.demo.entity.User;
import com.example.demo.response.LoginResponse;
import com.example.demo.service.UserServiceImpl;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200") 
@RequestMapping("api/users")
public class UserController {
	@Autowired
	private UserServiceImpl userService;

	@PostMapping(path = "/add")
	public ResponseEntity<Map<String, String>> saveUser(@Valid @RequestBody UserDto userDto) throws Exception {
	    Map<String, String> response = new HashMap<>();
	    if (userDto.getPassword().equals(userDto.getcPassword())) {
	        if (userDto.getName().length() >= 3) {
	            if(userDto.getMobile().length() == 10) {
	                String id = userService.saveUser(userDto);
	                response.put("message", "User added successfully");
	                response.put("id", id);
	                return new ResponseEntity<>(response, HttpStatus.OK);
	            } else {
	                response.put("error", "Number must be 10 digits");
	                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	            }
	        } else {
	            response.put("error", "Name must be greater than 3 characters");
	            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	        }
	    } else {
	        response.put("error", "Password and Confirm Password do not match");
	        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
	    }
	}


	@PostMapping(path = "/login")
	public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) throws Exception {
		LoginResponse loginResponse = userService.loginUser(loginDto);
		return ResponseEntity.ok(loginResponse);
	}

	@GetMapping("/userlist")
	public ResponseEntity<List<User>> getAllUsers() throws Exception {
		List<User> users = userService.getAllUsers();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	@GetMapping("/{userId}")
	public User getUserById(@PathVariable int userId) throws Exception {
		return userService.getUserById(userId);
	}

	@DeleteMapping("/{userId}")
	public void deleteUser(@PathVariable int userId) throws Exception {
		userService.deleteUser(userId);

	}

	@PutMapping("/update/{userId}")
	public ResponseEntity<User> updateUser(@PathVariable int userId, @RequestBody User updatedUser) throws Exception {
		User updated = userService.updateUser(userId, updatedUser);
		if (updated != null) {
			return new ResponseEntity<>(updated, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND); // User not found
		}
	}

}
