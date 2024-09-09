import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminServiceService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-blood-details',
  templateUrl: './admin-blood-details.component.html',
  styleUrl: './admin-blood-details.component.css'
})
export class AdminBloodDetailsComponent {
  usersData: any = [];
  selectedUser: any = {}; 
  userFormData: FormGroup;
  
  dId: number = 0;
  
  showUpdateButton: boolean = true;  // Flag to control the visibility of the update button
  viewOnly: boolean = false; 
  showAddButton: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private adminService: AdminServiceService
  ) {
    this.userFormData = new FormGroup({
      bloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      unitsAvailable: new FormControl(this.selectedUser?.unitsAvailable || '', [Validators.required]),
      noOfDonors: new FormControl(this.selectedUser?.noOfDonors || '', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.adminService.getBloodDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.usersData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  viewUser(userdata: any) {
    this.selectedUser = userdata;
    this.dId = this.selectedUser.Id;

    this.userFormData.patchValue({
      bloodGroup: this.selectedUser.bloodGroup,
      unitsAvailable: this.selectedUser.unitsAvailable,
      noOfDonors: this.selectedUser.noOfDonors,
    });

    this.showUpdateButton = false;  // Hide the update button when viewing a user
    this.viewOnly = true;  // Set view mode
    this.userFormData.disable();  // Disable form fields
  }

  openModel(userdata: any) {
    this.selectedUser = userdata;
    this.dId = this.selectedUser.dId;

    this.userFormData.patchValue({
      bloodGroup: this.selectedUser.bloodGroup,
      unitsAvailable: this.selectedUser.unitsAvailable,
      noOfDonors: this.selectedUser.noOfDonors,
    });

    this.showUpdateButton = true;  // Show the update button when editing a user
    this.viewOnly = false;  // Set edit mode
    this.userFormData.enable();
  }

  addBlood() {
    this.userFormData.reset();
    // Script for automatic screen refresh
    


    this.userFormData = new FormGroup({
      bloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      unitsAvailable: new FormControl(this.selectedUser?.unitsAvailable || '', [Validators.required]),
      noOfDonors: new FormControl(this.selectedUser?.noOfDonors || '', [Validators.required]),
    });

    this.showAddButton = true;
    this.showUpdateButton = false;
  }
 

  addBloodData(bloodData:any){
    console.log(bloodData);


    this.adminService.addBloodData(bloodData).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    )
    this.userFormData.reset();
    window.location.reload();


  }
}
