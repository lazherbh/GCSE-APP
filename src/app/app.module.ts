import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import   
 { GestionCompetanceComponent } from './pages/gestion-competance/gestion-competance.component';
import { GestionOffreComponent } from './pages/gestion-offre/gestion-offre.component';
import { GestionDomaineComponent } from './pages/gestion-domaine/gestion-domaine.component';
import { OffreComponent } from './pages/offre/offre.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    GestionCompetanceComponent,
    GestionOffreComponent,
    GestionDomaineComponent,
    OffreComponent,
    JobDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatDividerModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
