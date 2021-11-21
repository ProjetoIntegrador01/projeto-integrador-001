import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  type: string;

  product: Product = {
    name: '',
    price: null,
    quantity: null
  }

  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
    
  }

  saveProduct(): void {
    this.productService.create(this.product).subscribe( () => {
      this.productService.showMessage("Produto criado com sucesso!");
      this.router.navigate(['products']);
      console.log(this.type);
      
    });
  }

  backToProducts(): void {
    this.router.navigate(['products']);
  }
}
