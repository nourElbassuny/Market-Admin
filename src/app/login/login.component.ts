import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CartComponent } from '../carts/components/cart/cart.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!:FormGroup;
  errorMessage: any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private authService:AuthService){
    this.loginForm=this.fb.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    });
  }
  onSubmit():void {
      const rawForm=this.loginForm.getRawValue();
      this.authService.login(rawForm.email,rawForm.password)
      .subscribe({
        next:()=>{
          console.log("succes");
          this.router.navigateByUrl('/products');
        },
        error:(err)=>{
          this.errorMessage=err.code;
        }
      });
  }
  
}
