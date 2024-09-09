import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/user-service.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any;
  userId:any=0;
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
    private userService: UserServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.userFormData = new FormGroup({
      registerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl('', [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl('', [Validators.required]),
      registerAge: new FormControl('', [Validators.required]),
      registerGender: new FormControl('', [Validators.required]),
      registerEmail: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  ngOnInit(): void {
    // Only access localStorage in the browser
    if (isPlatformBrowser(this.platformId)) {
      // Try to retrieve the user data from router state
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        this.user = navigation.extras.state['user'];
        console.log('User data in ProfileComponent from router state:', this.user);
        this.userId = this.user.userId;
      }
      
      // If no user data is found in router state, try to retrieve it from localStorage
      if (!this.user) {
        const storedUser = localStorage.getItem('userData');
        if (storedUser) {
          this.user = JSON.parse(storedUser);
          console.log('User data retrieved from localStorage:', this.user);
        } else {
          console.error('No user data found in localStorage');
          // Optionally, redirect to login if no user data is found
          this.router.navigate(['/login']);
        }
      }

      // If user data is found, initialize the form
      if (this.user) {
        this.initializeForm();
      }
    }
  }

  initializeForm(): void {
    this.userFormData.patchValue({
      registerName: this.user?.name || '',
      registerMobile: this.user?.mobile || '',
      registerAddress: this.user?.address || '',
      registerAge: this.user?.age || '',
      registerGender: this.user?.gender || '',
      registerEmail: this.user?.email || '',
    });
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
        window.location.reload(); // Optionally handle form submission and redirect logic
      },
      (error) => {
        console.error("Error updating user data:", error);
      }
    );
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
