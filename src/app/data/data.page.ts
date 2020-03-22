import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  title = 'Data Sources';
  localDataCitation = '@dataset{marivate_vukosi_2020_3723347, author = {Marivate, Vukosi and de Waal, Alta and Combrink, Herkulaas and Lebogo, Ofentswe and Moodley, Shivan and Mtsweni, Nompumelelo and Rikhotso, Vuthlari}, title = {{Coronavirus disease (COVID-19) case data - South Africa}}, month = mar, year = 2020, publisher = {Zenodo}, doi = {10.5281/zenodo.3723347}, url = {https://doi.org/10.5281/zenodo.3723347} }';
  constructor() { }

  ngOnInit() {
  }

}
