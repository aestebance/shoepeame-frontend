import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagementPageComponent} from './management-page.component';

const routes: Routes = [
  { path: '', component: ManagementPageComponent },
  { path: ':artId', component: ManagementPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementPageRoutingModule { }
