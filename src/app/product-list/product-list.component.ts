import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: string[] = [];

  
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  clearList() {
    this.products = []; // Empty the products array
  }
}
