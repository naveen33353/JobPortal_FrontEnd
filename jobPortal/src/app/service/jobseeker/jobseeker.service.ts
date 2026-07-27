import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobSeeker } from 'src/app/auth/Models/jobSeeker';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class JobseekerService {

  constructor(private http : HttpClient) { }

  url = environment.baseurl + "jobseekers";

  getJobSeekerById(id : number){
    return this.http.get<jobSeeker>(`${this.url}/${id}`);
  }
}
