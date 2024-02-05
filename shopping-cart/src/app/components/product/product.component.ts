import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: any[] = [];

  constructor() {}

  ngOnInit() {
    this.products = [
      {
        code: 'code 1',
        name: 'name 1',
        category: 'category 1',
        quantity: 'quantity 1',
      },
    ];
  }
}
