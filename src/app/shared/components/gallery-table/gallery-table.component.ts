import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gallery-table',
  templateUrl: './gallery-table.component.html',
  styleUrls: ['./gallery-table.component.scss']
})
export class GalleryTableComponent implements OnInit {

  @Input() productList: any;
  @Output() galleryEmitter = new EventEmitter();
  @Output() searchBarEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    (this.productList === undefined) ? this.productList = [] : null;
  }

  searchBarChanges(changes): void {
    this.searchBarEmitter.emit(changes);
  }

  showGallery(): any {
    this.galleryEmitter.emit(
      {
        gallery: true,
        grid: false
      }
    );
  }
}
