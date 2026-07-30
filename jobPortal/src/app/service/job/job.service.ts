import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobPostDTO } from 'src/app/auth/Models/JobPost';
import { Job } from 'src/app/landing/models/job';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  url:string = environment.baseurl;

  constructor(private http:HttpClient) { }

  getAllJobs():Observable<Job[]>{
    return this.http.get<Job[]>(this.url + "jobs");
  }

  
  getSavedJobs( id : Number) : Observable<Job[]>{
  return this.http.get<Job[]>(this.url + "jobs/saved/" + id );
  }
  
  getRecommendedJobs(keyword : string){
    return this.http.get<Job[]>(`${this.url}jobs/search?keyword=${keyword}`);
  }

  getJobbyId(id  : Number){
    return this.http.get<Job>(this.url + "jobs/" + id);
  }

  

  postJob(job:JobPostDTO):Observable<JobPostDTO>{
    return this.http.post<JobPostDTO>(this.url + "jobs",job);
  }

  getJobById(id:number):Observable<Job>{
    return this.http.get<Job>(this.url + 'jobs/' +id);
  }
}
