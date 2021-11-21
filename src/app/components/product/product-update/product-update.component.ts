import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  type: string = 'entrada';
  choiceQuantity: number = 0;
  
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  setQuantity() {
    
    if(this.type === 'entrada') {
      this.product.quantity += this.choiceQuantity;
    }
    else {
      this.product.quantity -= this.choiceQuantity;
    }
    
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.setQuantity();

    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["products"]);      
    });
  }

  backToProducts(): void {
    this.router.navigate(['products']);
  }
}
