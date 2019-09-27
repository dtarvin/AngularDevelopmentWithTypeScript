import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

interface Product {
  id: string;
  title: string;
  price: number;
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Products</h1>
    <ul>
      <li *ngFor="let product of products$ | async">
        {{product.title }}: {{product.price | currency}}
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent {
  // title = 'readfile';

  products$: Observable<Product[]>;

  // constructor(private httpClient: HttpClient) {
  //   this.products$ = this.httpClient
  //                       .get<Product[]>('/data/products.json');
  // }

  // How to pass headers and query parameters to a GET request
  constructor(private httpClient: HttpClient) {
    let httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Basic QWxhZGRpb');

    let httpParams = new HttpParams()
      .set('title', "First");

    this.products$ = this.httpClient.get<Product[]>('/data/products.json',
    {
      headers: httpHeaders,
      params: httpParams
    });
  }
  
}
