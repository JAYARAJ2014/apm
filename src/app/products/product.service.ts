import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
 providedIn: 'root'
})
export class ProductService {


  private productUrl = 'api/products/product.json';

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('Data from service: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occuredd: ${err.error.message}`;
    } else {
      errorMessage = `Return Code: ${err.status}, Description: ${err.message}`;
    }

    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
