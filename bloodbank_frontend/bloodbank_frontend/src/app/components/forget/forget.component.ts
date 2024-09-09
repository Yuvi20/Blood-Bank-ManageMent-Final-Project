import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    RegisterComponent
  ],
})
export class ForgetComponent {

  updatePassword = this.fb.group({
    loginName: ['', [Validators.required, Validators.email]], // Added email validation
    password: ["",
      [Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*]{8,}$/)]
      ],
    cPassword: ["", Validators.required]
  }, {
    validator: this.passwordMatchValidator // No need to bind 'this' here
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('cPassword')?.value;

    if (password !== confirmPassword) {
      this.cPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      return null;
    }
  }

  // Getters for form controls
  get loginName() {
    return this.updatePassword.get('loginName');
  }
  get password() {
    return this.updatePassword.get('password');
  }
  get cPassword() {
    return this.updatePassword.get('cPassword');
  }

  onSubmit() {
    if (this.updatePassword.valid) {
      const updateData = {
        email: this.loginName?.value,
        password: this.password?.value,
        // Removed cPassword from updateData as it's redundant
      };

      // Send the password update request to your backend
      this.http.post('http://localhost:8085/api/users/forgetpassword', updateData)
        .subscribe(
          (response) => {
            console.log('Password updated successfully:', response);
            // Handle success, e.g., display a success message and redirect to login
            this.router.navigate(['/login']); 
          },
          (error) => {
            console.error('Error updating password:', error);
            // Handle error, e.g., display an error message to the user
          }
        );
    } else {
      console.log("Form is invalid");
    }
  }
}
