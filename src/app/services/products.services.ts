import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, delay, throwError } from "rxjs";
import { IProduct } from "../models/product";
import { ErrorService } from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class ProductsServices {
  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  getAll():Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      catchError(this.errorHandler.bind(this))
      )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message)
    return throwError(() => error.message)
  }
}
