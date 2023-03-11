import { Iproduct } from './../../models/iproduct';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productid:number=0;
  product:any=null;

constructor(private x:ActivatedRoute,private productservice:ProductService,private router:Router){
  this.productid=Number(this.x.snapshot.paramMap.get('id'));
}
  ngOnInit(): void {
    if(this.productid){
    this.productservice.getProductById(this.productid).subscribe({
      next:(response)=>
      {
        this.product=response
      },
      error:(error)=>{
        console.log(error);
      }
      
    });
    }
    else{
      this.router.navigate(['/products']);
    }
  }
}
