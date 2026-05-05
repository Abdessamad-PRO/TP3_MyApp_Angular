import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //   products=[
  //   { id: 1, name: 'Laptop', price: 1200, selected:true },
  //   { id: 2, name: 'Mouse', price: 25, selected:false},
  //   { id: 3, name: 'Keyboard', price: 45, selected:true}
  // ];
  constructor(private http:HttpClient) { } //constructeur pour l'injection des dependances
  getAllProducts(){ Observable<any>
    return this.http.get('http://localhost:3000/products');
  }
  deleteProduct(product:any){
    return this.http.delete('http://localhost:3000/products/'+product.id);
    // this.products=this.products.filter((p:any):boolean=>p.id!==product.id)
  }

}
 