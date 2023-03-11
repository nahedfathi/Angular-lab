import { Iproduct } from './../../models/iproduct';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any=[]
  flag:boolean=false;
constructor(private productservice:ProductService){
 
}
  ngOnInit(): void {
    if(!this.flag)
    {
      this.productservice.getAllProduct().subscribe(
        {
          next:(response)=>
          {
            this.products=response
          },
          error:(error)=>{
            console.log(error);
          }
          
        }
      );
    }
   
  }
  delete(productid:number)
  {
  this.productservice.deleteproduct(productid).subscribe({
    next:(response)=>{
      this.products=this.products.filter((product:any)=>product.id !=productid)
    }
  });
  }
}
