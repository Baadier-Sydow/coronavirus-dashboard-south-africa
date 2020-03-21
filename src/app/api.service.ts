import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endpoints: {
    confirmed: 'cases/confirmed'
  };

  constructor(private http: HttpClient) { }

  getConfirmedCases(): Promise<any> {
    return this.http.get(environment.api.international).toPromise();
  }
}
