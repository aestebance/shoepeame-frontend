import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  productList;
  gallery: any = true;
  grid: any = false;

  constructor(private productService: ProductsService) {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res;
    });

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  searchBarChanges(changes): void {
    this.productService.searchProduct(changes).subscribe((res: any) => {
      this.productList = res;
    });
  }

  showGallery(value): any {
    this.gallery = value.gallery;
    this.grid = value.grid;
  }
}
