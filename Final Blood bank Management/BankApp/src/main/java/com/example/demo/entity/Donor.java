package com.example.demo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Donor 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dId;
	private String fname;
	private String lname;
	private String bloodGroup;
	private int unitsOfBlood;
	private String mobile;
	private String gender;
	private int age;
	private String disease;
	private String state;
	private String city;
	private String address;
	private String date;
	
	public Donor() {
		super();
	}

	public Donor(int dId, String fname, String lname, String bloodGroup, int unitsOfBlood, String mobile, String gender,
			int age, String disease, String state, String city, String address, String date) {
		super();
		this.dId = dId;
		this.fname = fname;
		this.lname = lname;
		this.bloodGroup = bloodGroup;
		this.unitsOfBlood = unitsOfBlood;
		this.mobile = mobile;
		this.gender = gender;
		this.age = age;
		this.disease = disease;
		this.state = state;
		this.city = city;
		this.address = address;
		this.date = date;
	}

	public int getdId() {
		return dId;
	}

	public void setdId(int dId) {
		this.dId = dId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public int getUnitsOfBlood() {
		return unitsOfBlood;
	}

	public void setUnitsOfBlood(int unitsOfBlood) {
		this.unitsOfBlood = unitsOfBlood;
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

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
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

	@Override
	public String toString() {
		return "Donor [dId=" + dId + ", fname=" + fname + ", lname=" + lname + ", bloodGroup=" + bloodGroup
				+ ", unitsOfBlood=" + unitsOfBlood + ", mobile=" + mobile + ", gender=" + gender + ", age=" + age
				+ ", disease=" + disease + ", state=" + state + ", city=" + city + ", address=" + address + ", date="
				+ date + "]";
	}

	
	
	
	
}