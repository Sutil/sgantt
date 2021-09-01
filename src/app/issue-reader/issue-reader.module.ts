import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueReaderRoutingModule } from './issue-reader-routing.module';
import { IssueReaderComponent } from './issue-reader.component';


@NgModule({
  declarations: [IssueReaderComponent],
  imports: [
    CommonModule,
    IssueReaderRoutingModule
  ]
})
export class IssueReaderModule { }
