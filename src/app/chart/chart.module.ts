import { ChartService } from './chart.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartRoutingModule,
    ModalModule.forChild(),
  ],
  providers: [
  ]
})
export class ChartModule { }
