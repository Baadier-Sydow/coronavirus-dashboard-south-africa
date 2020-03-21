import { Component, OnInit, Input } from '@angular/core';

import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

import { ApiService } from './../../../api.service';

import * as csvToJson from 'csvtojson';

@Component({
  selector: 'app-total-tests',
  templateUrl: './total-tests.component.html',
  styleUrls: ['./total-tests.component.scss'],
})
export class TotalTestsComponent implements OnInit {

  tests: any;
  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Local Tests' },
    { data: [], label: 'Travellers Tested' },
  ];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalTestCases().then((casesCSV: any) => {
      csvToJson().fromString(casesCSV).then((casesJson) => {
        this.tests = casesJson;
        this.processChartData();
      });
    });
  }

  processChartData() {
    this.tests.forEach(datapoint => {
        this.lineChartLabels.push(datapoint.date);
        this.lineChartData[0].data.push(datapoint.cumulative_tests);
        this.lineChartData[1].data.push(datapoint.scanned_travellers);
    });
  }

}
