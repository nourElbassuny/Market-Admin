import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { response } from 'express';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
firbaseAuth=inject(Auth);

register(email:string,username:string,password: string):Observable<void>{
  const promise=createUserWithEmailAndPassword(
    this.firbaseAuth,email,password
  ).then(response=>updateProfile(response.user,{displayName:username}));

  return from(promise);
}

login(email:string,password: string):Observable<void>{
  const promise=signInWithEmailAndPassword(
    this.firbaseAuth,email,password
  ).then(()=>{});

  return from(promise);
}
 
}
