import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../../api.service';

import * as csvToJson from 'csvtojson';

@Component({
  selector: 'app-total-cases',
  templateUrl: './total-cases.component.html',
  styleUrls: ['./total-cases.component.scss'],
})
export class TotalCasesComponent implements OnInit {

  cases: any = [];
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalConfirmedCases().then(cases => {
      this.cases = cases;
    });
  }

}
