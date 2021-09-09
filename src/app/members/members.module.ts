import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MembersComponent],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MembersModule { }
