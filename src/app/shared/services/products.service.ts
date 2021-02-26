import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Iarticle} from '../model/article-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<object> {
    return this.http.get('https://shopeame-backend.herokuapp.com/products');
  }
  getProduct(artId): Observable<object> {
    return this.http.get('https://shopeame-backend.herokuapp.com/products/' + artId);
  }

  searchProduct(term): Observable<object> {
    return this.http.get('https://shopeame-backend.herokuapp.com/products?q=' + term);
  }

  updateProduct(article: Iarticle): Observable<object> {
    return this.http.put('https://shopeame-backend.herokuapp.com/products/' + article.id, article);
  }

  createProduct(article: Iarticle): Observable<object> {
    delete article.id;
    return this.http.post('https://shopeame-backend.herokuapp.com/products/', article);
  }

  deleteProduct(article: Iarticle): Observable<object> {
    return this.http.delete('https://shopeame-backend.herokuapp.com/products/' + article.id);
  }
}
