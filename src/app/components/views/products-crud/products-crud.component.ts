import { HeaderService } from './../../template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
    ) {
      this.headerService.headerData = {
        title: 'Estoque de Produtos',
        icon: 'store',
        routerUrl: '/products'
      }
    }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    this.router.navigate(['products/create']);
  }
}
