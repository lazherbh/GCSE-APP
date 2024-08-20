import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OffreComponent } from './pages/offre/offre.component';
import { JobDetailComponent } from './pages/job-detail/job-detail.component';
import { PagesComponent } from './pages/pages.component';
import { GestionDomaineComponent } from './pages/gestion-domaine/gestion-domaine.component';
import { GestionCompetanceComponent } from './pages/gestion-competance/gestion-competance.component';
import { GestionOffreComponent } from './pages/gestion-offre/gestion-offre.component';
import { ImporterCvComponent } from './pages/importer-cv/importer-cv.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'offre', component: OffreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail', component: JobDetailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'pages', component: PagesComponent  },
  { path: 'domaine', component: GestionDomaineComponent },
  { path: 'competance', component: GestionCompetanceComponent },
  { path: 'offres', component: GestionOffreComponent},
  { path: 'cv', component: ImporterCvComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
