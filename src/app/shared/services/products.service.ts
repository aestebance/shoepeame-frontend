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
    return this.http.get('http://localhost:3000/products');
  }
  getProduct(artId): Observable<object> {
    return this.http.get('http://localhost:3000/products/' + artId);
  }

  searchProduct(term): Observable<object> {
    return this.http.get('http://localhost:3000/products?q=' + term);
  }

  updateProduct(article: Iarticle): Observable<object> {
    return this.http.put('http://localhost:3000/products/' + article.id, article);
  }

  createProduct(article: Iarticle): Observable<object> {
    return this.http.post('http://localhost:3000/products/', article);
  }

  deleteProduct(article: Iarticle): Observable<object> {
    return this.http.delete('http://localhost:3000/products/' + article.id);
  }
}
