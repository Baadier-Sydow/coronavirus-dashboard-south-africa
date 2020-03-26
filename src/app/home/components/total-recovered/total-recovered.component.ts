import { ApiService } from './../../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-recovered',
  templateUrl: './total-recovered.component.html',
  styleUrls: ['./total-recovered.component.scss'],
})
export class TotalRecoveredComponent implements OnInit {

  recovered = '';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalTestingTimeline().then(cases => {
      this.recovered = cases.pop().recovered;
    });
  }

}
