import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.scss'],
})
export class SideLeftComponent implements OnInit {
  sidebarVisible: boolean = true;
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Product',
        icon: 'pi pi-fw pi-list',
        items: [
          {
            label: 'Product list',
            icon: '',
            routerLink: '/product/list',
          },
          {
            label: 'Add Product',
            icon: '',
            routerLink: '/product/add',
          },
        ],
      },
    ];
  }
}
