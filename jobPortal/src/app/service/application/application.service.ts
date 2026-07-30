import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/auth/Models/Application';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  url:string = environment.baseurl;

  constructor(private http:HttpClient) { }

  getApplicantsByCompany(id:number):Observable<Application[]>{
    return this.http.get<Application[]>(this.url + "applications/company/" + id);
  }

  getPendindApplicants(id:number):Observable<Application[]>{
    return this.http.get<Application[]>(this.url + "applications/company/"+ id + "/status/"+ "PENDING");
  }

  getHiredApplicants(id:number):Observable<Application[]>{
    return this.http.get<Application[]>(this.url + "applications/company/"+ id + "/status/"+ "APPROVED");

  }

  getApplicationByjobSeekerId(id : number) : Observable <Application[]>{
    return this.http.get<Application[]>(this.url +"applications/jobseeker/" + id );
  }

  getApplicationByStatus(status : string) : Observable<Application[]>{
    return this.http.get<Application[]>(this.url + "applications/status/" + status);
  }

  getApplicatioByApproved(): Observable<Application[]>{
 return this.http.get<Application[]>(this.url + "applications/approved");
  }


}
