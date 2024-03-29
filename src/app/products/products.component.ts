import { Component, OnInit } from '@angular/core';
import { Products, description } from '../products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: Products[] = [];

  produtcForm: FormGroup;

  constructor(private formeBuilder: FormBuilder,
    private service: ProductsService
  ) {
    this.produtcForm = formeBuilder.group({

      id: [''],
      name: [''],
      price: [''],
      quantity: ['']
    });
  }

  ngOnInit(): void {
    this.loadproducts();
  }
  
  loadproducts(){
    this.service.getproducts().subscribe({
      next: Date => this.products = Date
     
   });
   
  }

  save() {
  
    this.service.save(this.produtcForm.value).subscribe({

      next: Date => this.products.push(Date)

    })

    }

    
  }


