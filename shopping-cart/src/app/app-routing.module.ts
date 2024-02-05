import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductModule } from './components/product/product.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'product/list',
    pathMatch: 'full',
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./components/product/product.module').then(
        (m) => m.ProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
