import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArticleComponent } from './components/article/article.component';
import {FormsModule} from '@angular/forms';
import {StarRatingModule} from 'angular-star-rating';


@NgModule({
  declarations: [GalleryComponent, ArticleComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  exports: [
    GalleryComponent
  ]
})
export class SharedModule { }
