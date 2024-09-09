package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class Admin
{
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int adminId;
		private String name;
		private String mobile;
		private String gender;
		private int age;	
		private String address;
		private String email;
		private String password;
		private String cPassword;
		
		
		public Admin() {
			super();
		}


		public Admin(int adminId, String name, String mobile, String gender, int age,String address, String email, String password,
				String cPassword) {
			super();
			this.adminId = adminId;
			this.name = name;
			this.mobile = mobile;
			this.gender = gender;
			this.age = age;
			this.address = address;
			this.email = email;
			this.password = password;
			this.cPassword = cPassword;
		}


		public int getAdminId() {
			return adminId;
		}


		public void setAdminId(int adminId) {
			this.adminId = adminId;
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
			return "AdminDto [adminId=" + adminId + ", name=" + name + ", mobile=" + mobile + ", gender="
					+ gender + ", age=" + age + ", address=" + address + ", email=" + email + ", password=" + password
					+ ", cPassword=" + cPassword + "]";
		}


	
	

		
}