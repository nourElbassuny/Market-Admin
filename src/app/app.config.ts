import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp } from '@angular/fire/app';
import {provideAuth,getAuth}from '@angular/fire/auth'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD26olBz-Rd8uaMFFKxDy55GcivVH30ncs",
  authDomain: "store-1e401.firebaseapp.com",
  projectId: "store-1e401",
  storageBucket: "store-1e401.appspot.com",
  messagingSenderId: "12588901972",
  appId: "1:12588901972:web:88506ac8411eb52737efc1",
  measurementId: "G-LCN12FZSHR"
};
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth())
  ]
};
