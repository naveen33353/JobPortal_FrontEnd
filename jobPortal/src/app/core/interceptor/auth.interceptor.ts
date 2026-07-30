import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // Extract only the path (works for absolute and relative URLs)
    const url = new URL(req.url, window.location.origin).pathname;

    // Public endpoints (NO JWT required)
const isPublicPath =
  (req.method === 'GET' && url === '/api/jobs') ||
  (req.method === 'GET' && url === '/api/company') ||
  url === '/api/auth/login' ||
  url === '/api/auth/register' ||
  url === '/api/auth/signup';

    const token = localStorage.getItem('token');

    console.log('Interceptor called');
    console.log('URL:', url);
    console.log('Token:', token);

    // Skip Authorization header for public endpoints or when no token exists
    if (isPublicPath || !token) {
      return next.handle(
        req.clone({
          setHeaders: {
            'Content-Type': 'application/json'
          }
        })
      );
    }

    // Attach JWT for protected endpoints
    return next.handle(
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
    );
  }
}