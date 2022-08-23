import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
search = new BehaviorSubject("")
  constructor(private http:HttpClient) { }

  //api call to get all products
  viewAllProducts(){
    const baseURL ='http://localhost:3000/products/'
  return this.http.get(baseURL)
  }


  // api call to get a single product

  viewProducts(productId:any){
    const baseURL ='http://localhost:3000/products/'+productId
  return this.http.get(baseURL)
  }


  // api call to delete product

  deleteProducts(productId:any){
    const baseURL ='http://localhost:3000/products/'+productId
  return this.http.delete(baseURL)
  }


    // api call for adding new product

    addProducts(productData:any){
      const baseURL ='http://localhost:3000/products/'
    return this.http.post(baseURL,productData)
    }



}
