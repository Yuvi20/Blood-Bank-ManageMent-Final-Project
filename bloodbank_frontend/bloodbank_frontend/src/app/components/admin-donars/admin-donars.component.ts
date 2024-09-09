import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../service/user-service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminServiceService } from '../../service/admin.service';

@Component({
  selector: 'app-admin-donars',
  templateUrl: './admin-donars.component.html',
  styleUrl: './admin-donars.component.css',
 
})
export class AdminDonarsComponent { 
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
      registerFName: new FormControl(this.selectedUser?.fname || '', [Validators.required, Validators.minLength(3)]),
      registerLName: new FormControl(this.selectedUser?.lname || '', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl(this.selectedUser?.mobile || '', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl(this.selectedUser?.address || '', [Validators.required]),
      registerAge: new FormControl(this.selectedUser?.age || '', [Validators.required]),
      registerGender: new FormControl(this.selectedUser?.gender || '', [Validators.required]),
      registerBlood: new FormControl(this.selectedUser?.unitsOfBlood || '', [Validators.required]),
      registerBloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      registerDisease: new FormControl(this.selectedUser?.disease || '', [Validators.required]),
      registerCity: new FormControl(this.selectedUser?.city || '', [Validators.required]),
      registerState: new FormControl(this.selectedUser?.state || '', [Validators.required]),
    });
  }

  ngOnInit(): void {

    this.adminService.getDonarData().subscribe(
      (data: any) => {
        console.log(data);
        this.usersData = data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  updateDonor(userFormData: any) {
    console.log(userFormData);

    const userUpdatedData = {
      "fname": userFormData.registerFName,
      "lname": userFormData.registerLName,
      "mobile": userFormData.registerMobile,
      "address": userFormData.registerAddress,
      "age": userFormData.registerAge,
      "gender": userFormData.registerGender,
      "unitsOfBlood": userFormData.registerBlood,
      "bloodGroup": userFormData.registerBloodGroup,
      "disease": userFormData.registerDisease,
      "city": userFormData.registerCity,
      "state": userFormData.registerState,
    }

    this.adminService.updateDonor(userUpdatedData, this.dId).subscribe(
      (response) => {
        console.log("User data updated successfully:", response);
      },
      (error) => {
        console.error("Error updating user data:", error);
      }
    );
    window.location.reload();
  }

  viewUser(userdata: any) {
    this.selectedUser = userdata;
    this.dId = this.selectedUser.dId;
    this.cPassword = this.selectedUser.cPassword;
    this.password = this.selectedUser.password;

    this.userFormData.patchValue({
      registerFName: this.selectedUser.fname,
      registerLName: this.selectedUser.lname,
      registerMobile: this.selectedUser.mobile,
      registerAddress: this.selectedUser.address,
      registerAge: this.selectedUser.age,
      registerGender: this.selectedUser.gender,
      registerBlood: this.selectedUser.unitsOfBlood,
      registerDisease: this.selectedUser.disease,
      registerCity: this.selectedUser.city,
      registerState: this.selectedUser.state,
      registerBloodGroup: this.selectedUser.bloodGroup,
    });

    this.showUpdateButton = false;  // Hide the update button when viewing a user
    this.viewOnly = true; // Set view mode
    this.userFormData.disable(); // Disable form fields
  }

  deleteDonor(userdata: any) {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
  
    if (confirmation) {
      this.adminService.deleteDonor(userdata).subscribe(
        (response) => {
          console.log("User data deleted successfully:", response);
          window.location.reload();
          // Optionally, you can refresh the list of users or navigate away
        },
        (error) => {
          console.error("Error deleting user data:", error);
          // Optionally, show an error message to the user
        }
      );
    } else {
      console.log("User deletion canceled.");
    }
  }

  openModel(userdata: any) {
    this.selectedUser = userdata;
    this.dId = this.selectedUser.dId;
    this.cPassword = this.selectedUser.cPassword;
    this.password = this.selectedUser.password;

    this.userFormData.patchValue({
      registerFName: this.selectedUser.fname,
      registerLName: this.selectedUser.lname,
      registerMobile: this.selectedUser.mobile,
      registerAddress: this.selectedUser.address,
      registerAge: this.selectedUser.age,
      registerGender: this.selectedUser.gender,
      registerBlood: this.selectedUser.unitsOfBlood,
      registerBloodGroup: this.selectedUser.bloodGroup,
      registerDisease: this.selectedUser.disease,
      registerCity: this.selectedUser.city,
      registerState: this.selectedUser.state,
    });

    this.showUpdateButton = true;  // Show the update button when editing a user
    this.viewOnly = false; // Set edit mode
    this.userFormData.enable();
  }

  addDonor(){
    this.userFormData.reset();

    this.userFormData = new FormGroup({
      registerFName: new FormControl(this.selectedUser?.fname || '', [Validators.required, Validators.minLength(3)]),
      registerLName: new FormControl(this.selectedUser?.lname || '', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl(this.selectedUser?.mobile || '', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl(this.selectedUser?.address || '', [Validators.required]),
      registerAge: new FormControl(this.selectedUser?.age || '', [Validators.required]),
      registerGender: new FormControl(this.selectedUser?.gender || '', [Validators.required]),
      registerBlood: new FormControl(this.selectedUser?.unitsOfBlood || '', [Validators.required]),
      registerBloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      registerDisease: new FormControl(this.selectedUser?.disease || '', [Validators.required]),
      registerCity: new FormControl(this.selectedUser?.city || '', [Validators.required]),
      registerState: new FormControl(this.selectedUser?.state || '', [Validators.required]),
    });
    this.showAddButton=true;
    this.showUpdateButton = false;

    
  }

  addDonorData(donorData:any){
    console.log(donorData);

    const donordata1={
      "fname":donorData.registerFName,
      "lname":donorData.registerLName,
      "mobile":donorData.registerMobile,
      "address":donorData.registerAddress,
      "age":donorData.registerAge,
      "gender":donorData.registerGender,
      "email":donorData.registerEmail,
      "disease":donorData.registerDisease,
      "city":donorData.registerCity,
      "state":donorData.registerState,
      "unitsOfBlood":donorData.registerBlood,
      "bloodGroup":donorData.registerBloodGroup,
     
    }


    this.adminService.addDonorData(donordata1).subscribe(
      (response)=>{
        console.log(response,"data added succesfully");
        window.location.reload();
      },
      (error)=>{
        console.log(error);
      }
    )
    this.userFormData.reset();
    window.location.reload();

  }
}


