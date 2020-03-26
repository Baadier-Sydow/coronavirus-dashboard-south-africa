declare var require: any;
import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import MapModule from 'highcharts/modules/map';

import DarkUnica from 'highcharts/themes/dark-unica';
DarkUnica(Highcharts);

const zaMap = require('@highcharts/map-collection/countries/za/za-all.geo.json');

// const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');
MapModule(Highcharts);

import { ApiService } from './../../../api.service';


@Component({
  selector: 'app-cases-by-province',
  templateUrl: './cases-by-province.component.html',
  styleUrls: ['./cases-by-province.component.scss'],
})
export class CasesByProvinceComponent implements OnInit {

  cases = [];
  mapChart = 'mapChart';
  Highcharts = Highcharts;

  chartOptions: Highcharts.Options | any = {
    chart: {
      map: zaMap
    },
    title: {
      text: ''
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: 'bottom'
      }
    },
    legend: {
      enabled: false
    },
    colorAxis: {
      min: 0
    },
    series: [
      [{
        data: [
          ['za-ec', 0],
          ['za-np', 1],
          ['za-nl', 2],
          ['za-wc', 3],
          ['za-nc', 'za-nc', 400],
          ['za-nw', 5],
          ['za-fs', 6],
          ['za-gt', 770],
          ['za-mp', 8],
        ],
        name: 'Coronavirus Positive Cases',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        type: 'mapBubble'
      }]
    ]
  };

  chartUpdateFlag = false;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getLocalConfirmedCases().then(cases => {
      this.cases = cases;
    });
   }

}
