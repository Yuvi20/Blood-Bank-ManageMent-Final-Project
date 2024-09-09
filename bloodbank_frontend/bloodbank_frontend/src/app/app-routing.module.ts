import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardsComponent } from './components/cards/cards.component';
import { AdminBloodDetailsComponent } from './components/admin-blood-details/admin-blood-details.component';
import { AdminDonarsComponent } from './components/admin-donars/admin-donars.component';
import { AdminRequestComponent } from './components/admin-request/admin-request.component';
import { AdminAddAdminComponent } from './components/admin-add-admin/admin-add-admin.component';
import { RequestForBloodComponent } from './components/request-for-blood/request-for-blood.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'bloodDetails', component: AdminBloodDetailsComponent },
  { path: 'donars', component: AdminDonarsComponent },
  { path: 'request', component: AdminRequestComponent,},
  { path: 'addadmin', component: AdminAddAdminComponent },
  { path: 'bloodrequest', component: RequestForBloodComponent },
  {path:'profile',component:ProfileComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
