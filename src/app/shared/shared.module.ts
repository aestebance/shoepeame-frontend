import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChipsModule} from 'primeng/chips';
import { SharedRoutingModule } from './shared-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleComponent } from './components/article/article.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StarRatingModule} from 'angular-star-rating';
import { FormManageComponent } from './components/form-manage/form-manage.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { GalleryTableComponent } from './components/gallery-table/gallery-table.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [GalleryComponent, ArticleComponent, FormManageComponent, SearchBarComponent, GalleryTableComponent],
    imports: [
      CommonModule,
      SharedRoutingModule,
      FormsModule,
      StarRatingModule.forRoot(),
      ReactiveFormsModule,
      ChipsModule,
      InputNumberModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      TableModule
    ],
  providers: [MessageService],
  exports: [
    GalleryComponent,
    ArticleComponent,
    FormManageComponent,
    GalleryTableComponent
  ]
})
export class SharedModule { }
