import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path : '', component: HomeComponent},
    {path : 'login', component: LoginComponent},
    {path : 'register', component: RegisterComponent},
    {path : 'account', component: AccountComponent}
];
