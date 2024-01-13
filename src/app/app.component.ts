import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {IProduct} from "./models/product";
import {HttpClientModule} from "@angular/common/http";
import {ProductsServices} from "./services/products.services";
import {OnInit} from "@angular/core";
import { Observable, tap } from 'rxjs';
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "./pipes/filter-products.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent, FormsModule, FilterProductsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsServices]
})

export class AppComponent implements OnInit {
  title = 'angular-crash-course';
  term = '';
  /* products: IProduct[] = [] */
  loading = false;
  products$: Observable<IProduct[]>

  constructor(private productsService: ProductsServices) {
  }

  ngOnInit():void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
   /*  this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    }) */
  }
}
