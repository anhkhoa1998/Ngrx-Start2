import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { environment } from '@env/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  urls = [
    `${ environment.apiUrl }/auth/authenticate`,
    `${ environment.apiUrl }/auth/register`,
  ];

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');

    if (!this.urls.includes(request.url)) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${ token }`
        }
      });
    }

    return next.handle(request).pipe(
      catchError(err => {

        if (err.status === 401) {
          localStorage.removeItem('token');
          this.router.navigate([ 'auth/sign-in' ]);
        }

        return throwError(err);
      }));
  }

}
