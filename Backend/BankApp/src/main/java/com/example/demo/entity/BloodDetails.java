package com.example.demo.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class BloodDetails 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(unique = true)
    private String bloodGroup;
    private int unitsAvailable;
    private int noOfDonors = 1;

    
	public BloodDetails() {
		super();
	}

	public BloodDetails(int id, String bloodGroup, int unitsAvailable,int noOfDonors) {
		super();
		this.id = id;
		this.bloodGroup = bloodGroup;
		this.unitsAvailable = unitsAvailable;
		this.noOfDonors = noOfDonors;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public int getUnitsAvailable() {
		return unitsAvailable;
	}

	public void setUnitsAvailable(int unitsAvailable) {
		this.unitsAvailable = unitsAvailable;
	}
	

	public int getNoOfDonors() {
		return noOfDonors;
	}

	public void setNoOfDonors(int noOfDonors) {
		this.noOfDonors = noOfDonors;
	}

	@Override
	public String toString() {
		return "BloodDetails [id=" + id + ", bloodGroup=" + bloodGroup + ", unitsAvailable=" + unitsAvailable
				+ ", noOfDonors=" + noOfDonors + "]";
	}

	
}
