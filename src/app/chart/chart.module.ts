import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';


@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartRoutingModule,
    ModalModule.forChild(),
    TypeaheadModule,
  ],
  providers: [
  ]
})
export class ChartModule { }
