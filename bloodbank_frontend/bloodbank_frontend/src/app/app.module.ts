import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

import { AdminDonarsComponent } from './components/admin-donars/admin-donars.component';
import { AdminRequestComponent } from './components/admin-request/admin-request.component';
import { AdminBloodDetailsComponent } from './components/admin-blood-details/admin-blood-details.component';
import { AdminAddAdminComponent } from './components/admin-add-admin/admin-add-admin.component';
import { RequestForBloodComponent } from './components/request-for-blood/request-for-blood.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
        CardsComponent,
        FooterComponent,
        AdminDonarsComponent,
        AdminRequestComponent,
        AdminBloodDetailsComponent,
        AdminAddAdminComponent,
        RequestForBloodComponent,
        NavbarComponent,
        ProfileComponent
       
      
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    

 
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
