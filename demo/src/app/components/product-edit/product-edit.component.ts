import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productid:number=0;
product:any
constructor(private x:ActivatedRoute,private productservice:ProductService, private router:Router){
this.x.paramMap.subscribe(
    (params)=>{
      this.productid=Number(params.get('id'));
      this.productform.controls['productName'].setValue('');
      this.productform.controls['price'].setValue('');
      this.productform.controls['quantity'].setValue('');
    });
   
}
  ngOnInit(): void {
if(this.productid !=0)
{
  this.productservice.getProductById(this.productid).subscribe({
    next:(response)=>
    {
      this.product=response
    this.productform.controls['productName'].setValue(this.product.productName);
    this.productform.controls['price'].setValue(this.product.price);
    this.productform.controls['quantity'].setValue(this.product.quantity);
    }
  })
}
  }


productform=new FormGroup({
  productName:new FormControl('',[Validators.required]),
  price:new FormControl('',[Validators.pattern('[/0-9/]*')]),
  quantity:new FormControl('',Validators.required),
  image:new FormControl()
})
get name()
{
  return this.productform.controls['productName']
}
get price()
{
  return this.productform.controls['price']
}
get quantity()
{
  return this.productform.controls['quantity']
}
submitform(e:Event)
{
  e.preventDefault();
  if(this.productform.status=='VALID')
  {
    if(this.productid==0)
    {
        this.productservice.addproduct(this.productform.value).subscribe()
    }
    else{
    this.productservice.editproduct(this.productid,this.productform.value).subscribe(
      {
        next:()=>
        {
          
        },
        error:()=>
        {
          this.router.navigate([`/edit/${this.productid}`]);
        }
      }
    );
    }
    this.router.navigate(['/products']);
  }
}
}
