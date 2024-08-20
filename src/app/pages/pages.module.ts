import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { OffreComponent } from './offre/offre.component';
import { GestionDomaineComponent } from './gestion-domaine/gestion-domaine.component';
import { GestionCompetanceComponent } from './gestion-competance/gestion-competance.component';
import { GestionOffreComponent } from './gestion-offre/gestion-offre.component';
import { GestionUserComponent } from './gestion-user/gestion-user.component';
import { FormsModule } from '@angular/forms';
import { ImporterCvComponent } from './importer-cv/importer-cv.component';


@NgModule({
  declarations: [
 
    
    
   
    GestionUserComponent,
             ImporterCvComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
