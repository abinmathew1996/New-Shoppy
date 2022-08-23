import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-produts',
  templateUrl: './delete-produts.component.html',
  styleUrls: ['./delete-produts.component.css']
})
export class DeleteProdutsComponent implements OnInit {
  productId:any;
  constructor( private router:Router,private activatedRoute:ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((data)=>{
      console.log(data);
      this.productId = data['id']
      
    })
    this.productService.deleteProducts(this.productId).subscribe((item:any)=>{
      alert('product deleted successfully')
      this.router.navigateByUrl('products')
    })
  }



}
