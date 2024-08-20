import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'domaines',
        loadChildren: ()=>import("./gestion-domaine/gestion-domaine.module").then((m)=>m.GestionDomaineModule)
      },
    
     
    ]
  }

];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PagesRoutingModule { }
