import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';


@NgModule({
  declarations: [ManagementPageComponent],
  imports: [
    CommonModule,
    ManagementPageRoutingModule
  ]
})
export class ManagementPageModule { }
