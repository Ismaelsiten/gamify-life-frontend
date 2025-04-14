import { Routes } from '@angular/router';
import { LoginComponent } from './module/public/auth/login/login.component';
import { RegisterComponent } from './module/public/auth/register/register.component';

export const routes: Routes = [ { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }];
