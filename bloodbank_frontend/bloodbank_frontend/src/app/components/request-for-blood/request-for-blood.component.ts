import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-request-for-blood',
  templateUrl: './request-for-blood.component.html',
  styleUrl: './request-for-blood.component.css'
})
export class RequestForBloodComponent {

  usersData: any = [];
  selectedUser: any = {}; 

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

  userFormData: FormGroup;
  constructor(
    private http: HttpClient,
    private router: Router,
    private userService:UserServiceService
  ) {
    this.userFormData = new FormGroup({
      registerName: new FormControl(this.selectedUser?.fname || '', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl(this.selectedUser?.mobile || '', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl(this.selectedUser?.address || '', [Validators.required]),
      registerAge: new FormControl(this.selectedUser?.age || '', [Validators.required]),
      registerEmail: new FormControl("", [Validators.required, Validators.email]),
      registerGender: new FormControl(this.selectedUser?.gender || '', [Validators.required]),
      registerBlood: new FormControl(this.selectedUser?.unitsOfBlood || '', [Validators.required]),
      registerDisease: new FormControl(this.selectedUser?.disease || '', [Validators.required]),
      registerBloodGroup: new FormControl(this.selectedUser?.bloodGroup || '', [Validators.required]),
      registerDate: new FormControl(this.selectedUser?.date || '', [Validators.required]),

    });
  }

   
onSubmit(requestData:any){

  requestData={
    "name":requestData.registerName,
    "mobile":requestData.registerMobile,
    "address":requestData.registerAddress,
    "age":requestData.register,
    "gender":requestData.registerGender,
    "units":requestData.registerBlood,
    "disease":requestData.registerDisease,
    "bloodGroup":requestData.registerBloodGroup,
    "date":requestData.registerDate,
    "email":requestData.registerEmail,
  }

  this.userService.addRequest(requestData).subscribe((response)=>{
    console.log(response);
    this.router.navigate(['/']);
  });

}
 
  // Form submission handler
 }
