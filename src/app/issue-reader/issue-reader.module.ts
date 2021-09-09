import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { IssueReaderRoutingModule } from './issue-reader-routing.module';
import { IssueReaderComponent } from './issue-reader.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [IssueReaderComponent],
  imports: [
    FormsModule,
    CommonModule,
    IssueReaderRoutingModule,
    BsDatepickerModule,
  ]
})
export class IssueReaderModule { }
