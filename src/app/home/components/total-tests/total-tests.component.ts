import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import theme from 'highcharts/themes/dark-unica';
theme(Highcharts);

import { ApiService } from './../../../api.service';

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
    plotOptions: {
      series: {
        connectNulls: true
      }
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

  chartUpdateFlag = false;
  tests: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalTestingTimeline().then(cases => {
      this.tests = cases;
      this.processChartData();
    });
  }

  processChartData() {
    this.tests.forEach(datapoint => {
      this.chartOptions.xAxis.categories.push(datapoint.date.substring(0, 5));
      this.chartOptions.series[0].data.push(parseInt(datapoint.cumulative_tests));
      this.chartOptions.series[1].data.push(parseInt(datapoint.scanned_travellers));
    });

    setTimeout(() => {
      this.Highcharts.charts.forEach(chart => {
        this.chartUpdateFlag = true;
        if (chart) {
          chart.reflow();
        }
      });
    }, 100);
  }

}
