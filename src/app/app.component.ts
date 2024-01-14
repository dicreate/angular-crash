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
import {ModalComponent} from "./components/modal/modal.component";
import {CreateProductsComponent} from "./components/create-products/create-products.component";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateProductsComponent, CommonModule, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent, FormsModule, FilterProductsPipe, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsServices]
})

export class AppComponent {

}
