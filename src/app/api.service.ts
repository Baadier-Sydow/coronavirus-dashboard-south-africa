import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  getLocalConfirmedCases(): Promise<any> {
    return this.http.get(environment.api.origin.url + environment.api.origin.confirmed, {responseType: 'text'}).toPromise();
  }

  getLocalTestCases(): Promise<any> {
    return this.http.get(environment.api.origin.url + environment.api.origin.testing, {responseType: 'text'}).toPromise();
  }
}
