import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import {Observable, catchError, delay, throwError, tap} from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";
import {products} from "../data/products";

@Injectable({
  providedIn: 'root'
})

export class ProductsServices {
  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  products: IProduct[] = []

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      tap(products => this.products = products),
      catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }

  create(product: IProduct):Observable<IProduct> {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product).pipe(
      tap(prod => this.products.push(prod))
    )
  }
}
