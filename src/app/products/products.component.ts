import { Component } from '@angular/core';
import { Products, description } from '../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Products[] = [

    { id: 1, name: "lápis", price: 2.25, quantity: 200 },
    { id: 2, name: "Borracha", price: 1.99, quantity: 50 },
    { id: 3, name: "Cola Branca", price: 3.99, quantity: 80 }

  ];

  description: description[] = [

    { description: "Lápis de Cor Sextavado Ecolápis 24 Cores Faber-Castell cx 1 un" }
  ]
}
