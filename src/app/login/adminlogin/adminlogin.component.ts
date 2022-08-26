import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginform = this.formBuilder.group({
    emailId:['',[Validators.required]],
    Current_password:['',[Validators.required]]
  })
  constructor(private formBuilder:FormBuilder,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    let logindata={
      emailId:this.loginform.value.emailId,
      Password:this.loginform.value.Current_password
    }
    console.log(logindata);
    
     if(this.loginform.valid){
      const result = this.productService.loginusers(logindata)
      console.log(result);
      
      if(result)
      {
        alert("Login successful")
        this.router.navigateByUrl('/products')
      }
     }
     else{
      alert("Login failed please enter correct email or password")
     }
 }

}
