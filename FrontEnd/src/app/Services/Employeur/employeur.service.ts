import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeurService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://192.168.10.10/api"


  inscrire(data){

    return this.http.post(`${this.baseUrl}/employeur/inscrire`, data);
  }
}
