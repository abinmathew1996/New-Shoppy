import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
search = new BehaviorSubject("")
public  cartitemList :any =[]
public productList = new BehaviorSubject([])

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

    // api call for registering new user
    signinusers(signinusers:any){
      const baseURL="http://localhost:3000/Signup/"
      return this.http.post(baseURL,signinusers)
     }

     loginusers(logindata:any){
      console.log(logindata);
      const baseURL="http://localhost:3000/signinusers/"
      return this.http.get(baseURL,logindata)
     }

     getProduct(){
      return this.productList.asObservable();
     }

     setProduct(product:any){
      return this.cartitemList.push(...product);
      this.productList.next(product);
     }

     addtoCart(product:any){

      this.cartitemList.push(product)
      this.productList.next(this.cartitemList);
      this.getTotalPrice();
      }

      getTotalPrice(){
        let grandTotal = 0;
        this.cartitemList.map((data:any)=>{
          grandTotal+= data.total;
        })
      

     }
     removeCartItem(product:any){
      this.cartitemList.map((data:any, index:any)=>{
if(product.id === data.id){
  this.cartitemList.splice(index,1)
}
      })
     }

     removeAllCart(){
      this.cartitemList =[]
      this.productList.next(this.cartitemList);
     }


}
