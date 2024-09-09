import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
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
    private router:Router
   ) {
    this.userForm = new FormGroup({
      registerName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      registerMobile: new FormControl("", [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]),
      registerAddress: new FormControl("", [Validators.required]),
      registerAge: new FormControl("", [Validators.required]),
      registerGender: new FormControl("", [Validators.required]),
      registerEmail: new FormControl("", [Validators.required, Validators.email]),
      registerPassword: new FormControl("", [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/)
      ]),
      registerConfirmPassword: new FormControl("", [Validators.required])
    }, {
      validators: this.passwordMatchValidator.bind(this)  // Apply custom validator here
    });
  }
   
  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('registerPassword')?.value as string;
    const confirmPassword = control.get('registerConfirmPassword')?.value as string;
  
    if (password !== confirmPassword) {
      control.get('registerConfirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

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

  // Form submission handler
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
      this.navigateToLogin();
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

//after submit it navigate to the login page

  // Navigate to login page
  navigateToLogin() {
    // Your implementation here
    this.router.navigate(['/login']);
    }
}



