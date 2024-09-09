import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrl: './donar.component.css'
})
export class DonarComponent {

  showError: boolean = false;
  showErrorMobile: boolean = false;
  shwErrAge: boolean = false;
  shwErrGender: boolean = false;
  shwErrEmail: boolean = false;
  shwErrPassword: boolean = false;
  shwErrConfirmPassword: boolean = false;
  
  userForm: FormGroup;
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router:Router
   ) {
    this.userForm = new FormGroup({
    
      registerMobile: new FormControl("", [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl("", [Validators.required, Validators.maxLength(255)]),
      registerAge: new FormControl("", [Validators.required, Validators.min(0)]),
      registerGender: new FormControl("", [Validators.required]),
      registerBloodGroup: new FormControl("", [Validators.maxLength(255)]),
      registerCity: new FormControl("", [Validators.maxLength(255)]),
      registerDate: new FormControl("", [Validators.maxLength(255)]),
      registerDisease: new FormControl("", [Validators.maxLength(255)]),
      registerFname: new FormControl("", [Validators.maxLength(255)]),
      registerLname: new FormControl("", [Validators.maxLength(255)]),
      registerState: new FormControl("", [Validators.maxLength(255)]),
      registerUnitsOfBlood: new FormControl("", [Validators.maxLength(255)])
    });
  }
   
  // Custom validator to check if passwords match
  

  // Getters for form controls
  get registerName() {
    return this.userForm.get('registerName');
  }
  get registerMobile() {
    return this.userForm.get('registerMobile');
  }
  get registerAddress() {
    return this.userForm.get('registerAddress');
  }
  get registerAge() {
    return this.userForm.get('registerAge');
  }
  get registerGender() {
    return this.userForm.get('registerGender');
  }
  get registerEmail() {
    return this.userForm.get('registerEmail');
  }
  get registerPassword() {
    return this.userForm.get('registerPassword');
  }
  get registerConfirmPassword() {
    return this.userForm.get('registerConfirmPassword');
  }




  onSubmit() {
    // Check if the form is valid
    if (this.userForm.valid) {
      // Collecting form data
      const userData = {
        name: this.registerName?.value,
        mobile: this.registerMobile?.value,
        address: this.registerAddress?.value,
        age: this.registerAge?.value,
        gender: this.registerGender?.value,
        email: this.registerEmail?.value,
        password: this.registerPassword?.value,
        cPassword: this.registerConfirmPassword?.value
      };
  
      // Call saveUser method with the collected userData
      this.saveUser(userData);
      // Navigate to login page
      
    } else {
      alert("This form is invalid");
      console.log("Form validation status:", this.userForm.valid);
    }
  }
  saveUser(userData: any) {
    this.http.post("http://localhost:8085/api/users/add", userData).subscribe(
      (data) => {
        console.log("Server response:", data);
        // Handle success (e.g., display a success message)
      },
      (error) => {
        console.error("Error occurred:", error);
        // Handle error (e.g., display an error message)
      }
    );
  }


}
