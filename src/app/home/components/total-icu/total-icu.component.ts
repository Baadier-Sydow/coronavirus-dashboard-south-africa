import { ApiService } from './../../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-icu',
  templateUrl: './total-icu.component.html',
  styleUrls: ['./total-icu.component.scss'],
})
export class TotalICUComponent implements OnInit {

  icu = '';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalTestingTimeline().then(cases => {
      this.icu = cases.pop().critical_icu;
    });
  }

}
