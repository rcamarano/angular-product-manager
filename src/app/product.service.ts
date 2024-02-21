import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: string[] = [];

  constructor() { }

  addProduct(product: string, price: number, quantity: number) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  clearProducts() {
    this.products = [];
  }
}
