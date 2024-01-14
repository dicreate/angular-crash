import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ProductComponent} from "./components/product/product.component";
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsServices} from "./services/products.services";
import {CreateProductsComponent} from "./components/create-products/create-products.component";
import {NavigationComponent} from "./components/navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CreateProductsComponent, CommonModule, RouterOutlet, ProductComponent, HttpClientModule, GlobalErrorComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProductsServices]
})

export class AppComponent {

}
