import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/landing/models/company';
import { Job } from 'src/app/landing/models/job';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url:string = environment.baseurl;

  constructor(private http : HttpClient) { }

  getAllCompanies():Observable<Company[]>{
    return this.http.get<Company[]>(this.url + "company");
  }

  getCompanyById(id:number):Observable<Company>{
    return this.http.get<Company>(this.url + "company/" + id);
  }

  getJobsByCompany(compId:number):Observable<Job[]>{
    return this.http.get<Job[]>(this.url + "jobs/company/" + compId);
  }
}
