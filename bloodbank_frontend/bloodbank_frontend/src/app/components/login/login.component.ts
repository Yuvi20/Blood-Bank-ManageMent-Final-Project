import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../../service/user-service.service';
import { Subscription } from 'rxjs';
import { AdminServiceService } from '../../service/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    
  ],
})
export class LoginComponent {
  // message:string = '';
  
  // subscription: Subscription = new Subscription();

  userData:any={}

  loginForm = this.fb.group({
    loginName: ['', Validators.required],
    password: ['', Validators.required]
  })

  private adminEmails: string[] = []; 

  constructor(private fb: FormBuilder, private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    private adminService:AdminServiceService,
    private userService:UserServiceService
  ) { }


  get loginName() {
    return this.loginForm.controls['loginName'];

  }
  get password() {
    return this.loginForm.controls['password'];
  }


  AdminData: any[] = [];

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe(
      (data: any) => {
        console.log(data);
        this.AdminData = data;
        this.adminEmails = this.AdminData.map((admin) => admin.email);
        console.log(this.userData,'userData')
      },
      (error) => {
        console.log(error);
      }
      );


  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  
onSubmit() {
  if (this.loginForm.valid) {
    const loginData = {
      email: this.loginName?.value,
      password: this.password?.value
    };
    console.log("Login Data:", loginData.email);


    if (this.adminEmails.includes(loginData.email ?? '')) {
      console.log("Admin Login",this.adminEmails);
      this.loginUserForAdmin(loginData);
      // this.router.navigate(['/cards']);
    } else {
      this.loginUser(loginData);
    }

  } else {
    console.log("Form is invalid");
  }
}


loginUser(loginData: any) {
  console.log("Login Data:", loginData);

  this.userService.addLogin(loginData).subscribe(
    (data) => {
      console.log("Full server response:", data);

      if (data && data.status ) {
        // Check if localStorage is available before accessing it
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('token', data.token);
          console.log('Token stored:', localStorage.getItem('token'));
        } else {
          console.error("localStorage is not available in this environment.");
        }

        // Filter and get user data based on email and password
        this.getFilteredUser(loginData.email, loginData.password);

        alert("Login successful!");
        this.router.navigate(['/profile']);
      } else {
        console.error("Login failed:", data.message);
        alert(data.message || "Login failed. Please try again.");
      }
    },
    (error) => {
      console.error("An error occurred:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  );
}


  
  
// want to login for admin is this possible for the same code

loginUserForAdmin(loginData: any) {
  console.log("Login Data:", loginData);

  this.adminService.loginAdmin(loginData).subscribe(
    (data) => {
      console.log("Server response:", data);
      if (data && data.status ) {
        // Check if localStorage is available before accessing it
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('token', data.token);
          console.log('Token stored:', localStorage.getItem('token'));
        } else {
          console.error("localStorage is not available in this environment.");
        }

        // Filter and get user data based on email and password

        alert("Login successful!");
        this.router.navigate(['/cards']);
      } else {
        console.error("Login failed:", data.message);
        alert(data.message || "Login failed. Please try again.");
      }
    }

  )


}



getFilteredUser(email: string, password: string) {
  this.http.get("http://localhost:8085/api/users/userlist").subscribe(
    (response: any) => {
      console.log(response);
      // Filter the user data based on email and password
      const matchedUser = response.find((user: any) => user.email === email && user.password === password);

      if (matchedUser) {
        console.log('Matched User:', matchedUser);
        this.userData = matchedUser;
        // Handle the matched user data (e.g., store it, navigate to profile)
        localStorage.setItem('userData', JSON.stringify(matchedUser));
        this.router.navigate(['/profile'], { state: { user: matchedUser } });
      } else {
        console.error('No matching user found');
        alert('Invalid email or password');
      }
    },
    (error) => {
      console.error("Error occurred:", error);
      // Handle error (e.g., show an error message)
    }
  );
}














  getAllUsers() {
    this.http.get("http://localhost:8085/api/users/userlist").subscribe(
      (response) => {
        console.log(response);
        // Handle response data (e.g., display user details)
        this.userData=response;
        console.log(this.userData,'userData')
      },
      (error) => {
        console.error("Error occurred:", error);
        // Handle error (e.g., show an error message)
      }
    );
  }


}
