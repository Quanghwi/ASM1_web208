import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { IProduct } from '../../interface/product';

@Component({
  selector: 'app-manager-products',
  templateUrl: './manager-products.component.html',
  styleUrls: ['./manager-products.component.css']
})
export class ManagerProductsComponent {
  product!: IProduct;
  products: IProduct[] = []
  constructor(private service: ProductService) {
    this.service.getProducts().subscribe(data => {
      this.products = data
      console.log(this.products);

    })
  }
  removeProduct(id: any) {
    const product = this.products.find(item => item.id == id)
    const result = confirm(`Xóa sản phẩm ${product?.name} khống?`)
    if(result){

      this.service.deleteProduct(id).subscribe(data => {
        this.products = this.products.filter(item => item.id !== id)
      })
    }
  }
}
