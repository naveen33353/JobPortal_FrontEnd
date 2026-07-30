import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from 'src/app/auth/Models/Application';
import { ApplicationDetails } from 'src/app/auth/Models/ApplicationDetails';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApplicationService {
  url: string = environment.baseurl;

  constructor(private http: HttpClient) {}

  getApplicantsByCompany(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(
      this.url + 'applications/company/' + id,
    );
  }

  getPendindApplicants(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(
      this.url + 'applications/company/' + id + '/status/' + 'PENDING',
    );
  }

  getHiredApplicants(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(
      this.url + 'applications/company/' + id + '/status/' + 'APPROVED',
    );
  }

  getApplicationByjobSeekerId(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(
      this.url + 'applications/jobseeker/' + id,
    );
  }

  getApplicationByStatus(status : string) : Observable<Application[]>{
    return this.http.get<Application[]>(this.url + "applications/status/" + status);
  }

  getApplicatioByApproved(): Observable<Application[]>{
 return this.http.get<Application[]>(this.url + "applications/approved");
  }


  getApplicationByJob(id: number): Observable<Application[]> {
    return this.http.get<Application[]>(this.url + 'applications/job/' + id);
  }

  getApplicationById(id: number): Observable<ApplicationDetails> {
    return this.http.get<ApplicationDetails>(
      this.url + 'applications/details/' + id,
    );
  }

 rejectApplication(id: number):Observable<any> {
  return this.http.put(
    `${this.url}applications/${id}/REJECTED`,
    {}
  );
}

approveApplication(id: number):Observable<any> {
  return this.http.put(
    `${this.url}applications/${id}/APPROVED`,
    {}
  );
}
}
