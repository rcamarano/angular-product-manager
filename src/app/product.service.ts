import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: string[] = [];

  constructor() { }

  addProduct(product: string) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearProducts() {
   location.reload();
  }
}
