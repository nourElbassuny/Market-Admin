import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { CartServiceService } from '../../services/cart-service.service';
import { fstat } from 'fs';
import { ProductServiceService } from '../../../products/sevices/product-service.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  carts:any[]=[];
  products:any[]=[];
  total:number=0;
  form!:FormGroup ;
  details:any;
  constructor(private service:CartServiceService,private productService:ProductServiceService ,private build:FormBuilder){
   
  }

  
  ngOnInit(): void {
    this.form=this.build.group({
      start:[''],
      end:['']
    })
    this.getAllCarts();
  }

getAllCarts(){
  this.service.getAllCarts().subscribe((res:any)=>{
    this.carts=res;
  })
}
applyFilter(){
  let date=this.form.value;
  this.service.getAllCarts(date).subscribe((res:any)=>{
    this.carts=res;
  })
}
view(index: number) {
  this.products=[];
    this.details=this.carts[index];
  for(let x in this.details.products){
    this.productService.getProductById(this.details.products[x].productId).subscribe((res:any)=>{
      this.products.push({item: res,quantity:this.details.products[x].quantity});
    })
  }
 
  }


}
