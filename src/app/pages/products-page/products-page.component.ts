import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  productList;

  constructor() {

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
