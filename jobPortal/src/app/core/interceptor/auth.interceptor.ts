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

  // Paths that should NOT get an Authorization header
  private publicPaths: string[] = [
    '/api/auth/login',
    '/api/auth/register',
    '/api/auth/signup',
    '/api/jobs',
    '/api/company'
  ];

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const isPublicPath = this.publicPaths.some(path => req.url.includes(path));
    const token = localStorage.getItem('token');

<<<<<<< HEAD
     console.log("Interceptor called");
  console.log("Token:", token);


    // Clone the request and add headers
=======
    // Don't attach Authorization header for public endpoints or when there's no token
    if (isPublicPath || !token) {
      const req2 = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });
      return next.handle(req2);
    }

>>>>>>> a49905d857a6c2aeb02ed8ee2f7ad42c176610c4
    const authRequest = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(authRequest);
  }
}