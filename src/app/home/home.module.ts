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
    TotalTestsComponent
  ],
  providers: [ApiService]
})
export class HomePageModule {}
