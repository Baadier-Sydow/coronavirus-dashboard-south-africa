import { Component, OnInit } from '@angular/core';

import { ApiService } from './../api.service';

import * as csvToJson from 'csvtojson';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  title = 'Home';
  cases: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalConfirmedCases().then((casesCSV: any) => {
      csvToJson().fromString(casesCSV).then((casesJson) => {
        this.cases = casesJson;
      });
    });
  }
}
