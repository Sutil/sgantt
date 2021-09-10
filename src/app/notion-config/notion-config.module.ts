import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotionConfigRoutingModule } from './notion-config-routing.module';
import { NotionConfigComponent } from './notion-config.component';


@NgModule({
  declarations: [NotionConfigComponent],
  imports: [
    CommonModule,
    NotionConfigRoutingModule,
    ReactiveFormsModule,
  ]
})
export class NotionConfigModule { }
