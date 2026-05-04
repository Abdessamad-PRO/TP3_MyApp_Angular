import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit {
  products! :any ;
  constructor() { }

 ngOnInit(): void {
     this.products=[
    { id: 1, name: 'Laptop', price: 1200, selected:true },
    { id: 2, name: 'Mouse', price: 25, selected:false},
    { id: 3, name: 'Keyboard', price: 45, selected:true}
  ];
 }

}
