import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private donarUrl="http://localhost:8085/api/donors";
  private requestUrl="http://localhost:8085/api/requests";
  private bloodUrl="http://localhost:8085/api/bloodDetails";
  private adminUrl="http://localhost:8085/api/admins"


  constructor(
    private http:HttpClient,
    
  ) { }

  getDonarData():Observable<any>{
    return this.http.get<any>( `${this.donarUrl}/donorlist`);
   

  }
loginAdmin(data:any):Observable<any>{
  return this.http.post<any>(`${this.adminUrl}/login`,data);

}

  addDonorData(donardata:any):Observable<any>{
    return this.http.post<any>(`${this.donarUrl}/add`,donardata);
  }

  updateDonor(donardata:any,dId:number):Observable<any>{
    console.log(donardata);
    return this.http.put<any>(`${this.donarUrl}/update/${dId}`,donardata);
  }  
  deleteDonor(donordata:any):Observable<any>{
    console.log(donordata.dId,"donorId")
    return this.http.delete<any>(`${this.donarUrl}/${donordata.dId}`);
  }



  //requst part 
  getRequestData():Observable<any>{
    return this.http.get<any>(`${this.requestUrl}/requestlist`);
  }


  //blood details

  getBloodDetails():Observable<any>{
    return this.http.get<any>(`${this.bloodUrl}/AllBloodDetails`);
  }

  saveBloodDetails(bloodDetails:any):Observable<any>{
    return this.http.put<any>(`${this.bloodUrl}/${bloodDetails.id}`,bloodDetails);
  }

  addBloodData(bloodData:any):Observable<any>{
    console.log(bloodData,"postdata");
    return this.http.post<any>(`${this.bloodUrl}/save`,bloodData)
  }


  //admin part
  saveAdminData(adminData:any):Observable<any>{
    return this.http.post<any>(`${this.adminUrl}/add`,adminData)
  }

  getAdmins():Observable<any>{
    return this.http.get<any>(`${this.adminUrl}/adminlist`);
  }

}
