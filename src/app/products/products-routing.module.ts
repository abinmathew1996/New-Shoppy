import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProdutsComponent } from './delete-produts/delete-produts.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewProdutsComponent } from './view-produts/view-produts.component';
import { ViewallProdutsComponent } from './viewall-produts/viewall-produts.component';

const routes: Routes = [
  { path: '', component: ViewallProdutsComponent },
  { path: 'view-product/:id', component: ViewProdutsComponent },
  { path: 'add-product', component: AddProductsComponent },
  { path: 'delete-product/:id', component: DeleteProdutsComponent },
  { path: 'update-product/:id', component: UpdateProductsComponent }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
