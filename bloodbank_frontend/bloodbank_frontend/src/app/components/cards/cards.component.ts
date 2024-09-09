import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { User } from '../../interface/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'] 
})
export class CardsComponent {
  usersData: User[] = [];
  selectedUser: any = {}; 
  userFormData: FormGroup;
  
  userId: number = 0;
  password: string = "";
  cPassword: string = "";
  
  showError: boolean = false;
  showErrorMobile: boolean = false;
  shwErrAge: boolean = false;
  shwErrGender: boolean = false;
  shwErrEmail: boolean = false;
  
  showUpdateButton: boolean = true;  // Flag to control the visibility of the update button
  viewOnly: boolean = false; 

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserServiceService,
  ) {
    this.userFormData = new FormGroup({
      registerName: new FormControl(this.selectedUser?.name || '', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl(this.selectedUser?.mobile || '', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl(this.selectedUser?.address || '', [Validators.required]),
      registerAge: new FormControl(this.selectedUser?.age || '', [Validators.required]),
      registerGender: new FormControl(this.selectedUser?.gender || '', [Validators.required]),
      registerEmail: new FormControl(this.selectedUser?.email || '', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    
    this.userService.getUserData().subscribe(
      (data: User[]) => {
        console.log(data);
        this.usersData = data;
      },
      (error) => {
        console.log(error);
      }
    );

    

    
  }

  updateUser(userFormData: any) {
    console.log(userFormData);

    const userUpdatedData = {
      "name": userFormData.registerName,
      "mobile": userFormData.registerMobile,
      "address": userFormData.registerAddress,
      "age": userFormData.registerAge,
      "gender": userFormData.registerGender,
      "email": userFormData.registerEmail,
      "password": this.password,
      "cPassword": this.cPassword
    }

    this.userService.updateUserData(userUpdatedData, this.userId).subscribe(
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
    this.userId = this.selectedUser.userId;
    this.cPassword = this.selectedUser.cPassword;
    this.password = this.selectedUser.password;

    this.userFormData.patchValue({
      registerName: this.selectedUser.name,
      registerMobile: this.selectedUser.mobile,
      registerAddress: this.selectedUser.address,
      registerAge: this.selectedUser.age,
      registerGender: this.selectedUser.gender,
      registerEmail: this.selectedUser.email,
    });

    this.showUpdateButton = false;  // Hide the update button when viewing a user
    this.viewOnly = true; // Set view mode
    this.userFormData.disable(); // Disable form fields
  }

  deleteUser(userdata: any) {
    const confirmation = window.confirm("Are you sure you want to delete this user?");
  
    if (confirmation) {
      this.userService.deleteUser(userdata).subscribe(
        (response) => {
          console.log("User data deleted successfully:", response);
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
    this.userId = this.selectedUser.userId;
    this.cPassword = this.selectedUser.cPassword;
    this.password = this.selectedUser.password;

    this.userFormData.patchValue({
      registerName: this.selectedUser.name,
      registerMobile: this.selectedUser.mobile,
      registerAddress: this.selectedUser.address,
      registerAge: this.selectedUser.age,
      registerGender: this.selectedUser.gender,
      registerEmail: this.selectedUser.email,
    });

    this.showUpdateButton = true;  // Show the update button when editing a user
    this.viewOnly = false; // Set edit mode
    this.userFormData.enable();
  }
}
