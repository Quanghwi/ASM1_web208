import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {
  constructor(private fb: FormBuilder, private service: ProductService, private router: Router) { }
  myFrorm = this.fb.group({
    name: [''],
    price: [0]
  })
}
