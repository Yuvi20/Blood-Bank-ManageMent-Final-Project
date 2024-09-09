import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private baseurl="http://localhost:8085/api/users"


  constructor(private http:HttpClient) { }

  

  getUserData():Observable<any>{
    return this.http.get<any>(this.baseurl+"/userlist");
  }
  updateUserData(updateuserData:any,userId :number):Observable<any>{
    console.log(updateuserData);
    console.log(userId);
    console.log(`${this.baseurl}/update/${userId}`)
    
    return this.http.put<any>(`${this.baseurl}/update/${userId}`,updateuserData);
  }

  deleteUser(userdata:any):Observable<any>{
    console.log(userdata.userId,"userId")
    return this.http.delete<any>(`${this.baseurl}/${userdata.userId}`);


  }

  addLogin(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseurl}/login`,data);
  }


  private usersource=new Subject<any>();

  userDataSelected$=this.usersource.asObservable();
  selectUser(user:any){
    this.usersource.next(user);
  }




  viewUser(userdata:any):Observable<any>{
    return this.http.get<any>(`${this.baseurl}/${userdata.userId}`);
  }

  addRequest(requestData:any):Observable<any>{
    return this.http.post<any>("http://localhost:8085/api/requests/add",requestData);
  }

  getRole(): string {
    return localStorage.getItem("role") || "";
  }

  logout(): void {
    localStorage.clear();
  }


}
