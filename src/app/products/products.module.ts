import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ViewallProdutsComponent } from './viewall-produts/viewall-produts.component';
import { ViewProdutsComponent } from './view-produts/view-produts.component';
import { DeleteProdutsComponent } from './delete-produts/delete-produts.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCartComponent } from './add-cart/add-cart.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ViewallProdutsComponent,
    ViewProdutsComponent,
    DeleteProdutsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    FilterPipe,
    AddCartComponent,
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductsModule { }
