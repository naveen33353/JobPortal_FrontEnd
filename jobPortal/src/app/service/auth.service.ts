import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobSeeker } from '../auth/Models/jobSeeker';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url = environment.baseurl+"jobseekers"
   logout() {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}

signUp(js : jobSeeker){
  return this.http.post(this.url, js);
}

}