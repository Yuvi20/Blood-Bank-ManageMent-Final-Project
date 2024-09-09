import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl="http://localhost:8085/api/users"

  constructor(private http:HttpClient) { }

  

  // login(loginName:string,password:string){
  //   return this.http.post(this.baseurl+"/login",{loginName:loginName,password:password});
  // }

  // getUserByLoginName(loginName: string): Observable<any> {
  
  //   // Your implementation here
  //   return this.http.get(this.baseurl +loginName);

  // }

  // registeUser(){
  //   return this.http.post(this.baseurl+"/add",{})



  // }
  
  // saveUser(userData:any){
  //   return this.http.post(this.baseurl+"/add",userData);
  // }

  // getAllUsers(){
  //   return this.http.get(this.baseurl+"/userlist");
  // }

  // isAuthenticated(): boolean {
  //   if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
  //     const token = localStorage.getItem('angulartoken');
  //     return !!token; // Returns true if token exists
  //   }
  //   return false; // Return fal
  // }

}
