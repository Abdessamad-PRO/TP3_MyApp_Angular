import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products! :any ;
  constructor(private productService: ProductService) { }

 ngOnInit(): void {
     
 }
 handledelete(product:any):void{
  let v = confirm("Are you sure to delete this product?")
  if(v==true){
    this.products=this.products.filter((p:any)=>p.id!==product.id)
  }
  
 }

}
