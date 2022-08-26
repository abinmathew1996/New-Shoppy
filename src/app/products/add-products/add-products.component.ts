import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
})
export class AddProductsComponent implements OnInit {
  addProductForm = this.formBuilder.group({
    id: [],
    product_name: [""],
    categoryId: [""],
    description: [""],
    price: [],
    is_available: [],
    product_img: [""],
    rating: [],
    reviews: [],
    vender_name: [""],
    warranty: [""],
  });
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  addProduct() {
    let newProduct = {
      id: this.addProductForm.value.id,
      product_name: this.addProductForm.value.product_name,
      categoryId: this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      price: this.addProductForm.value.price,
      is_available: this.addProductForm.value.is_available,
      product_img: this.addProductForm.value.product_img,
      rating: this.addProductForm.value.rating,
      reviews: this.addProductForm.value.reviews,
      vender_name: this.addProductForm.value.vender_name,
      warranty: this.addProductForm.value.warranty,
    };

    this.productService.addProducts(newProduct).subscribe((item: any) => {
      console.log(item);
      
      alert('product added successfully');
      this.router.navigateByUrl('products');
    });
  }
}
