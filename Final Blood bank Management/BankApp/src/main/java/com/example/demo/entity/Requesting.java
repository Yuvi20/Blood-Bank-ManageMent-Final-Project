package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Requesting 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
    private String name;
    private String email;
    private String bloodGroup;
    private int units;
    private String disease;
    private String mobile;
    private String gender;
    private int age;
    private String address;
    private String date;


//	private String status;
   
   
    
	public Requesting() {
		super();
	}


	public Requesting(int id, String name, String email, String bloodGroup, int units, String disease, String mobile,
			String gender, int age, String address, String date) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.bloodGroup = bloodGroup;
		this.units = units;
		this.disease = disease;
		this.mobile = mobile;
		this.gender = gender;
		this.age = age;
		this.address = address;
		this.date = date;
//		this.status=status;
	
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getBloodGroup() {
		return bloodGroup;
	}


	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}


	public int getUnits() {
		return units;
	}


	public void setUnits(int units) {
		this.units = units;
	}


	public String getDisease() {
		return disease;
	}


	public void setDisease(String disease) {
		this.disease = disease;
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


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}

//    public String getStatus() {
//		return status;
//	}
//
//
//	public void setStatus(String status) {
//		this.status = status;
//	}


//	@Override
//	public String toString() {
//		return "Requesting [id=" + id + ", name=" + name + ", email=" + email + ", bloodGroup=" + bloodGroup
//				+ ", units=" + units + ", disease=" + disease + ", mobile=" + mobile + ", gender=" + gender + ", age="
//				+ age + ", address=" + address + ", date=" + date + ", status=" + status + "]";
//	}
//
//



	@Override
	public String toString() {
		return "Requesting [id=" + id + ", name=" + name + ", email=" + email + ", bloodGroup=" + bloodGroup
				+ ", units=" + units + ", disease=" + disease + ", mobile=" + mobile + ", gender=" + gender + ", age="
				+ age + ", address=" + address + ", date=" + date + "]";
	}


	


	
    

    
}