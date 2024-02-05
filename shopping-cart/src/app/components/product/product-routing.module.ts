import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
    path: 'list',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
