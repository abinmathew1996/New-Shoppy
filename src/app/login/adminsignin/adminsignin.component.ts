import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})


export class AdminsigninComponent implements OnInit {

  signupform = this.FormBuilder.group({
    id:[],
    userName:[''],
    emailId:[''],
    Password:[''],
    Phone:['']
  })

  constructor(private FormBuilder:FormBuilder,private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    
    let signinusers={
      id:this.signupform.value.id,
      userName:this.signupform.value.userName,
      emailId:this.signupform.value.emailId,
      Password:this.signupform.value.Password,
      Phone:this.signupform.value.Phone
    }
console.log(signinusers);
    this.productService.signinusers(signinusers).subscribe((data:any)=>{
    console.log(data); 
    alert("Registartion successful")
    this.router.navigateByUrl('/products')
    })
    
     }

} 

