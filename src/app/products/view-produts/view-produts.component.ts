import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-produts',
  templateUrl: './view-produts.component.html',
  styleUrls: ['./view-produts.component.css']
})
export class ViewProdutsComponent implements OnInit {
  productId:any
  productData:any
  constructor(private productService:ProductService ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      this.productId = data['id']
      
    })
    this.productService.viewProducts(this.productId).subscribe((item:any)=>{
      this.productData = item
    })
  }

}
