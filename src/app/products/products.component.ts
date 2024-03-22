import { Component } from '@angular/core';
import { Products, description } from '../products';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products: Products[] = [];

  produtcForm: FormGroup;

  constructor(private formeBuilder: FormBuilder) {

    this.produtcForm = formeBuilder.group({

    });
  }
}
