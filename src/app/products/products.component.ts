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
  constructor(private productService: ProductService) { }  //injection des dépendaces

 ngOnInit(): void {
     this.getAllProducts();
 }
 getAllProducts():void{
  // this.products=this.productService.getAllProducts();

  this.productService.getAllProducts().subscribe({
    next:resp=>{this.products=resp},
    error:err=>{console.log(err)},
  })
 }
 handledelete(product:any):void{
  let v = confirm("Are you sure to delete this product?")
  if(v==true){
    this.productService.deleteProduct(product).subscribe({
      next:value=>{this.getAllProducts()},
      error:err=>{console.log(err)}
    });
  }
  
 }

}
