import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SharedModule} from './shared/shared.module';
import {FormManageComponent} from './shared/components/form-manage/form-manage.component';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  }, {
    path: 'products', loadChildren: () =>
      import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)
  }, {
    path: 'manage', loadChildren: () =>
      import('./pages/management-page/management-page.module').then(m => m.ManagementPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
