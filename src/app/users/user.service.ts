import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) { }

    getUsers() {
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjIiLCJyb2xlIjoiVXNlciIsIm5iZiI6MTU4OTc3MjIyMCwiZXhwIjoxNTkwMzc3MDIwLCJpYXQiOjE1ODk3NzIyMjB9.d1EZXoyyDms0MAO-yc6WfKzrlA_CfZ6pN8dPTb91nnE');

        return this.httpClient.get('http://intern-2020.southeastasia.cloudapp.azure.com:4000/api/v1/companies', { headers });
    }
}