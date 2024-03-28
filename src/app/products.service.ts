import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url = "http://localhost:300/Products";

  // Após config o module httpClientModule, injetar http dentro do constructor.

  constructor(private http: HttpClient) { }

  // Primeiro service; getproducts me devolve um array de Products de forma assíncrono (observable).

  //como é feito a chamada ao back end:  pelo http. faz um get de Products por meio da url.

  getproducts(): Observable<Products[]>{

    return this.http.get<Products[]>(this.url);
  }
  
}
