import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../shared/services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Iarticle} from '../../shared/model/article-model';

@Component({
  selector: 'app-management-page',
  templateUrl: './management-page.component.html',
  styleUrls: ['./management-page.component.scss']
})
export class ManagementPageComponent implements OnInit {

  artId: any;
  product: Iarticle = {
    id: '',
    price: '',
    name: '',
    description: '',
    stars: '',
    image: ''
  };

  constructor(private productService: ProductsService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      if (params.get('artId')) {
        this.artId = params.get('artId');
        this.productService.getProduct(this.artId).subscribe((res: any) => {
          this.product = res;
        });
      }
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

}
