import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserLoginComponent,
    UsersigninComponent,
    AdminloginComponent,
    AdminsigninComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    
    ],
    exports:[
      AdminloginComponent,
      AdminsigninComponent
    ]
})
export class LoginModule { }
