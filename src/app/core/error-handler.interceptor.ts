import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpError } from './http-error.model';


@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {


    return next.handle(request).pipe(
      catchError(err => {
        const error: HttpError = {
          status: err.status,
          ok: err.ok,
          message: err.error && err.error.errors && err.error.errors[0].errorMessage,
        };

        return throwError(error);
      })
    );
  }
}
