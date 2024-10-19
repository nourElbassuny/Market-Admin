import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:"products",component:AllProductsComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"cart",component:CartComponent},
    // {path:"**",redirectTo:"cart",pathMatch:"full"}
];
