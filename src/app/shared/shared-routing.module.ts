import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GalleryComponent} from './components/gallery/gallery.component';
import {SharedModule} from './shared.module';
import {FormManageComponent} from './components/form-manage/form-manage.component';
import {GalleryTableComponent} from './components/gallery-table/gallery-table.component';

const routes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  {path: 'gallery/tab', component: GalleryTableComponent},
  {path: 'form', component: FormManageComponent},
  {path: '', redirectTo: '/gallery', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
