import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import {IProduct} from "./models/product";
import {HttpClientModule} from "@angular/common/http";
import {ProductsServices} from "./services/products.services";
import {OnInit} from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsServices]
})

export class AppComponent implements OnInit {
  title = 'angular-crash-course';

  products: IProduct[] = []

  constructor(private productsService: ProductsServices) {
  }

  ngOnInit():void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
    })
  }
}
