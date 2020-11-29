import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementPageRoutingModule } from './management-page-routing.module';
import { ManagementPageComponent } from './management-page.component';
import {SharedModule} from '../../shared/shared.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ManagementPageComponent],
    imports: [
        CommonModule,
        ManagementPageRoutingModule,
        SharedModule,
        FormsModule
    ]
})
export class ManagementPageModule { }
