import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from "rxjs/operators"; 
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  header = new HttpHeaders();

 
  constructor(private http: HttpClient, public router: Router) {
    this.header = this.header.set('Content-Type','application/json');
  }
  private REST_API_SERVER = 'https://reqres.in/api/users?page=2';


  public sendGetRequest(){
    return this.http.get(this.REST_API_SERVER);
  }
}
