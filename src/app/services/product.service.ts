import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    products=[
    { id: 1, name: 'Laptop', price: 1200, selected:true },
    { id: 2, name: 'Mouse', price: 25, selected:false},
    { id: 3, name: 'Keyboard', price: 45, selected:true}
  ];
  constructor() { } //constructeur pour l'injection des dependances
  getAllProducts(){
    return this.products;
  }
  deleteProduct(product:any){
    this.products=this.products.filter((p:any):boolean=>p.id!==product.id)
  }

}
 