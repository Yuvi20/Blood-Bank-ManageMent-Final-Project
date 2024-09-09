package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
@Table(name="user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userId;

	@Column(name="name")
	
	private String name;
	
	@Column(name = "email", unique = true, length = 25)
	private String email;
	
	@Size(min = 8, message = "password length must be 8 characters and upparcase,lowercase,digit")
	@Pattern(regexp = "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
	private String password;
	
	@Column(name = "mobile", unique = true)
	@NotNull(message = " Mobile Number Can Not Be Empty")
	@Pattern(regexp = "^[6-9][0-9]{9}$")
	@Size(min = 10, max = 10, message = "Mobile Number Should Contains 10 Digits")
	private String mobile;
	private String gender;
	private int age;
	private String address;
	private String cPassword;
	
	public User() {
		super();
	}
	
	public User(int userId, String name, String mobile, String gender, int age, String address, String email,
			String password, String cPassword) {
		super();
		this.userId = userId;
		
		this.name = name;
		this.mobile = mobile;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.email = email;
		this.password = password;
		this.cPassword = cPassword;
	}
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setUserName(String name) {
		this.name = name;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getcPassword() {
		return cPassword;
	}

	public void setcPassword(String cPassword) {
		this.cPassword = cPassword;
	}

	@Override
	public String toString() {
		return "User [userId=" + userId + ", name=" + name + ", mobile=" + mobile + ", gender=" + gender
				+ ", age=" + age + ", address=" + address + ", email=" + email + ", password=" + password
				+ ", cPassword=" + cPassword + "]";
	}

}
