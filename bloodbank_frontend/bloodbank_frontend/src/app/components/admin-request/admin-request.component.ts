import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrl: './admin-request.component.css'
})
export class AdminRequestComponent {

  requestStatus: string = 'Pending';

  usersData: any = [];
  selectedUser: any = {}; 
  userFormData: FormGroup;
  
  dId: number = 0;
  password: string = "";
  cPassword: string = "";
  
  showError: boolean = false;
  showErrorMobile: boolean = false;
  shwErrAge: boolean = false;
  shwErrGender: boolean = false;
  shwErrEmail: boolean = false;
  shwErrDisease: boolean = false;
  shwErrCity:boolean=false;
  shwErrState:boolean=false;
  
  showUpdateButton: boolean = true;  // Flag to control the visibility of the update button
  viewOnly: boolean = false; 
  showAddButton:boolean=false;


  constructor(
    private http: HttpClient,
    private router: Router,
    private adminService:AdminServiceService
  ) {
    this.userFormData = new FormGroup({
      registerName: new FormControl(this.selectedUser?.fname || '', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl(this.selectedUser?.mobile || '', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl(this.selectedUser?.address || '', [Validators.required]),
      registerAge: new FormControl(this.selectedUser?.age || '', [Validators.required]),
      registerGender: new FormControl(this.selectedUser?.gender || '', [Validators.required]),
      registerBlood: new FormControl(this.selectedUser?.unitsOfBlood || '', [Validators.required]),
      registerEmail: new FormControl(this.selectedUser?.email||'', [Validators.required, Validators.email]),
      registerDisease: new FormControl(this.selectedUser?.disease || '', [Validators.required]),
      registerBloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      registerDate: new FormControl(this.selectedUser?.date || '', [Validators.required]),
      // requestStatus: new FormControl(this.selectedUser?.requestStatus)
    });
  }

  ngOnInit(): void {

    this.adminService.getRequestData().subscribe(
      (data: any) => {
        console.log(data);
        this.usersData = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

 
  viewUser(userdata: any) {
    this.selectedUser = userdata;
    this.requestStatus="pending"
  
    this.userFormData.patchValue({
      registerName: this.selectedUser.name,
      registerMobile: this.selectedUser.mobile,
      registerEmail: this.selectedUser.email,
      registerAddress: this.selectedUser.address,
      registerAge: this.selectedUser.age,
      registerGender: this.selectedUser.gender,
      registerBlood: this.selectedUser.units,
      registerDisease: this.selectedUser.disease,
      registerBloodGroup: this.selectedUser.bloodGroup,
      registerDate: this.selectedUser.date,

    });

    this.showUpdateButton = false;  // Hide the update button when viewing a user
    this.viewOnly = true; // Set view mode
    this.userFormData.disable(); // Disable form fields
  }

 

  acceptRequest(): void {
    this.requestStatus = 'Accepted';
    
  }

  // Method to handle the Reject button click
  rejectRequest(): void {
    this.requestStatus = 'Rejected';
  }
 
}


