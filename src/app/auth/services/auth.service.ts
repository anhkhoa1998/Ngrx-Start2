import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SignIn, SignUp } from '../models';
import { environment } from '@env/environment';

@Injectable()
export class AuthService {


  constructor(private httpClient: HttpClient) {
  }

  signIn(user: SignIn) {
    return this.httpClient.post(`${ environment.apiUrl }/auth/authenticate`, user);
  }

  signUp(user: SignUp) {
    return this.httpClient.post(`${ environment.apiUrl }/auth/register`, user);
  }

  getToken() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    return token;
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
}
