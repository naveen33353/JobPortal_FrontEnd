import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

   intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ){

    // Get token from localStorage
    const token = localStorage.getItem('token');

     console.log("Interceptor called");
  console.log("Token:", token);


    // Clone the request and add headers
    const authRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(authRequest);
  }
}
