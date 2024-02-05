import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SideLeftComponent } from './commons/components/side-left/side-left.component';
import { NavBarComponent } from './commons/components/nav-bar/nav-bar.component';
import { SharedPrimengModule } from './commons/shareds/shared-primeng.module';
import { ProductComponent } from './components/product/product.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

@NgModule({
  declarations: [AppComponent, SideLeftComponent, NavBarComponent, ProductComponent, ProductFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedPrimengModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
