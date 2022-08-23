import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewall-produts',
  templateUrl: './viewall-produts.component.html',
  styleUrls: ['./viewall-produts.component.css']
})
export class ViewallProdutsComponent implements OnInit {
productlist:any;
filterCategory:any;
searchkey:any="";
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.viewAllProducts().subscribe((data)=>{
      console.log(data);
      this.productlist = data
    })

    this.productService.search.subscribe((value:any)=>{
      this.searchkey = value
    })

  }
  filter(category:any){
    this.filterCategory =this.productlist
    .filter((item:any)=>{
      if(item.categoryId == category || category == ""){
        return item
      }
    })
  }

}
