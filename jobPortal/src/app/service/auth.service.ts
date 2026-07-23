import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jobSeeker } from '../auth/Models/jobSeeker';
import { environment } from 'src/environment/environment';
import { Company } from '../auth/Models/Company';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  url = environment.baseurl
   logout() {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}

signUp(js : jobSeeker){
  return this.http.post(this.url +"jobseekers", js);
}

signUpCompany(comp : Company){
  return this.http.post(this.url + "company" , comp)
}

}