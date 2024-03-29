import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "../../components/product/product.component";
// import {ProductComponent} from "./components/product/product.component";
import { GlobalErrorComponent } from '../../components/global-error/global-error.component';
import {IProduct} from "../../models/product";
import {HttpClientModule} from "@angular/common/http";
import {ProductsServices} from "../../services/products.services";
import {OnInit} from "@angular/core";
import { Observable, tap } from 'rxjs';
import {FormsModule} from "@angular/forms";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {ModalComponent} from "../../components/modal/modal.component";
import {CreateProductsComponent} from "../../components/create-products/create-products.component";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CreateProductsComponent, CommonModule, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent, FormsModule, FilterProductsPipe, ModalComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})

export class ProductPageComponent implements OnInit{
  title = 'angular-crash-course';
  term = '';
  /* products: IProduct[] = [] */
  loading = false;
  // products$: Observable<IProduct[]>

  constructor(
    public productsService: ProductsServices,
    public modalService: ModalService
  ) {
  }

  ngOnInit():void {
    // this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading = false)
    // )
    this.productsService.getAll().subscribe(products => {
      this.loading = false
    })
  }
}
