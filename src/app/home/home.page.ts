import { Component, OnInit } from '@angular/core';

import { ApiService } from './../api.service';

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
    this.api.getConfirmedCases().then((cases: any) => {
      this.cases = cases;
    });
  }

}
