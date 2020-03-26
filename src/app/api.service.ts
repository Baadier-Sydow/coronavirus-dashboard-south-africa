import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as csvToJson from 'csvtojson';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  localConfirmed: any = null;
  localTestingTimeline: any = null;

  constructor(private http: HttpClient) {
    this.getLocalConfirmedCases();
    this.getLocalTestingTimeline();
   }

  getLocalConfirmedCases(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.localConfirmed) {
        this.http.get(environment.api.origin.url + environment.api.origin.confirmed, {responseType: 'text'}).toPromise().then( casesCSV => {
            csvToJson().fromString(casesCSV).then((casesJson) => {
              this.localConfirmed = casesJson;
              resolve(this.localConfirmed);
            });
        });
      } else {
        resolve(this.localConfirmed);
      }
    });
  }

  getLocalTestingTimeline(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.localTestingTimeline) {
        this.http.get(environment.api.origin.url + environment.api.origin.testing, {responseType: 'text'}).toPromise().then( casesCSV => {
            csvToJson().fromString(casesCSV).then((casesJson) => {
              this.localTestingTimeline = casesJson;
              resolve(this.localTestingTimeline);
            });
        });
      } else {
        resolve(this.localTestingTimeline);
      }
    });
  }
}
