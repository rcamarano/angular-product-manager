import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(productName: string) {
    this.productService.addProduct(productName);
  }

  getProducts() {
    return this.productService.getProducts();
  }
}
