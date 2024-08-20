import { Component, OnInit } from '@angular/core';
import { DomaineService } from 'src/app/_services/domaine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gestion-domaine',
  templateUrl: './gestion-domaine.component.html',
  styleUrls: ['./gestion-domaine.component.css']
})
export class GestionDomaineComponent implements OnInit {

  public domaine: any;

  public domaines: any[] =[];
  selectedDomaine : any = null ;
  showUpdateForm: boolean = false;
  form!: FormGroup;
  submitted: boolean=false;
    constructor(private fb: FormBuilder,private domaineService: DomaineService) { }
  
    ngOnInit(): void {
      this.loadListDomaines();
      this.form = this.fb.group({
        nom: ['', Validators.required]
      });
    }
  loadListDomaines(): void {
    this.domaineService.getDomaines().subscribe(data=>{
      console.log(data);
    this.domaines.push(...data);},
    err=>console.log(err));
  }
  onUpdate(domaine: any) {
    this.selectedDomaine = domaine;
    this.form.controls['domaineName'].setValue(this.selectedDomaine.nom);
    this.showUpdateForm = true;
  }
  openEditForm(domaine: any): void {
    this.selectedDomaine = domaine;
  }
  closeEditForm(): void {
    this.selectedDomaine = null;
  }
  
  onSubmit(): void {
    
    const domaineName = this.form.value.nom;
    this.domaineService.postDomaine({ domaineName })
      .subscribe(() => {
        console.log("here");
        
        this.domaineService.getDomaines().subscribe((data) => {
          this.domaines = data;  });
      }, (error) => {
      });
  
  }
  onUpdateSubmit() {

  this.domaineService.updateDomaine( this.selectedDomaine.id, this.form.value.nom ).subscribe(() => {
    this.showUpdateForm = false;
        this.domaineService.getDomaines().subscribe((data) => {
      this.domaines = data;  });
  });
  }
}
