import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { productlist } from '../models/productlist';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
baseurl:string='http://localhost:3005/products';
  constructor(private http:HttpClient) { }
  getAllProduct() {
    return this.http.get(this.baseurl);
  }

  getProductById(productId: number) {
    //filter return array
    return this.http.get(`${this.baseurl}/${productId}`)
  }
  addproduct(product:any)
  {
    return this.http.post(this.baseurl,product);
  }
  editproduct(productId:number,product:any)
  {
    return this.http.put(`${this.baseurl}/${productId}`,product)
  }
  deleteproduct(productId:number)
  {
    return this.http.delete(`${this.baseurl}/${productId}`);
  }
}
