import { ApiService } from './../../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-deaths',
  templateUrl: './total-deaths.component.html',
  styleUrls: ['./total-deaths.component.scss'],
})
export class TotalDeathsComponent implements OnInit {

  deaths = '';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalTestingTimeline().then(cases => {
      this.deaths = cases.pop().deaths;
    });
  }

}
