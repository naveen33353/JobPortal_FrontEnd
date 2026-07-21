import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   logout() {
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('token');
}
}