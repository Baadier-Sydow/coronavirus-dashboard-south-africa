import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);

import { ApiService } from './../../../api.service';

import * as csvToJson from 'csvtojson';

@Component({
  selector: 'app-total-tests',
  templateUrl: './total-tests.component.html',
  styleUrls: ['./total-tests.component.scss'],
})
export class TotalTestsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options | any = {
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      title: {
        text: 'Tests'
      }
    },
    legend: {
      enabled: true,
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      data: [],
      type: 'line',
      name: 'Local Tests'
    }, {
      data: [],
      type: 'line',
      name: 'Travellers Tested'
    }]
  };

  chartUpdateFlag: boolean = false;
  tests: any;

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
    let tempScannedTravellers = 0;

    this.tests.forEach(datapoint => {
      this.chartOptions.xAxis.categories.push(datapoint.date);
      this.chartOptions.series[0].data.push(parseInt(datapoint.cumulative_tests));
      if (datapoint.scanned_travellers === '') {
        this.chartOptions.series[1].data.push(tempScannedTravellers);
      } else {
        this.chartOptions.series[1].data.push(parseInt(datapoint.scanned_travellers));
        tempScannedTravellers = parseInt(datapoint.scanned_travellers);
      }
    });

    this.chartUpdateFlag = true;
  }

}
