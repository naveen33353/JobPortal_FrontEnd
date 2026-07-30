import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  
}
