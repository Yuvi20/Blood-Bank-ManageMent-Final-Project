package com.example.demo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDto {

		private int userId;
		
		@NotBlank(message = "user name should not blank")
		@Size(min = 3, message = "user name must contain at least 3 characters")
		private String name;
		private String email;
		private String password;
		private String mobile;
		private String gender;
		private int age;
		private String address;
		private String cPassword;
		
		public UserDto() {
			super();
		}
		
		public UserDto(int userId, String name, String mobile, String gender, int age, String address, String email,
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