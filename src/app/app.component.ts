import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-root',
    standalone: true,
  imports: [
    NgIf,
    CommonModule,
    ReactiveFormsModule,
    ProductFormComponent,
    ProductListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-product-manager';
  showAddProductForm: boolean = false;
  showProductListComponent: boolean = false;

  showAddForm() {
    this.showAddProductForm = true;
    this.showProductListComponent = false;
  }

  showProductList() {
    this.showAddProductForm = false;
    this.showProductListComponent = true;
  }
}
