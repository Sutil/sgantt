import { ChartService } from './chart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule
  ],
  providers: [
    ChartService
  ]
})
export class ChartModule { }
