import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


const routes: Routes = [
 {
  path:'products',
  // canActivate:[AuthGuard],
  children:[
    { path: '', component: ProductsComponent },
    { path: ':id', component: ProductDetailsComponent },
    {path:'edit/:id',component:ProductEditComponent},
  ]
 }
];

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  imports: [RouterModule.forChild(routes), CommonModule,ReactiveFormsModule
  ]
})
export class ProductModule { }
