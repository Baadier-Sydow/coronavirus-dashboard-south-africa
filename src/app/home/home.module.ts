import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { HighchartsChartModule } from 'highcharts-angular';

import { ApiService } from './../api.service';

import { TotalCasesComponent } from './components/total-cases/total-cases.component';
import { TotalTestsComponent } from './components/total-tests/total-tests.component';
import { CasesByProvinceComponent } from './components/cases-by-province/cases-by-province.component';
import { TotalICUComponent } from './components/total-icu/total-icu.component';
import { TotalRecoveredComponent } from './components/total-recovered/total-recovered.component';
import { TotalDeathsComponent } from './components/total-deaths/total-deaths.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HighchartsChartModule
  ],
  declarations: [
    HomePage,
    TotalCasesComponent,
    TotalTestsComponent,
    CasesByProvinceComponent,
    TotalDeathsComponent,
    TotalRecoveredComponent,
    TotalICUComponent
  ],
  providers: [ApiService]
})
export class HomePageModule {}
