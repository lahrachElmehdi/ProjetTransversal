import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = "http://192.168.10.10/api"

  signup(data){

    return this.http.post(`${this.baseUrl}/signup`, data);
  }


  login(data){
    return this.http.post(`${this.baseUrl}/login`, data)
  }

  sendPasswordResetLink(data){
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`, data)
  }
}
