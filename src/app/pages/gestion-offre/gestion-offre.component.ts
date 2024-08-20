import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../_services/offre.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomaineService } from 'src/app/_services/domaine.service';

@Component({
  selector: 'app-gestion-offre',
  templateUrl: './gestion-offre.component.html',
  styleUrls: ['./gestion-offre.component.css']
})
export class GestionOffreComponent implements OnInit {
  public listOffres: any[]=[];
  public offres: any[] = [];
public selectedOffre: any = null;
public listDomaines : any[]=[];
formOffre!: FormGroup;
submitted: boolean=false;
  constructor(private offService: OffreService, private fb: FormBuilder, private domaineService: DomaineService) { }

  ngOnInit(): void {
    this.getOffres();
    //this.getDomaine();
    this.formOffre = this.fb.group({
      title: ['', Validators.required],
      details: ['', Validators.required],
      domaine: ['', Validators.required],
      mode: ['', Validators.required],
      periodeEnMois: ['', Validators.required],
      
     })
  }
  getDomaine():void{
    this.domaineService.getDomaines().subscribe(data => {
   this.listDomaines.push(...data);
   //console.log(data)
    },error =>{
  console.log(error)
    })}
  get f() {
    return this.formOffre.controls;
  }
  submit(): void{
    this.offService.postOffre(this.formOffre.value).subscribe(data => {
      console.log(data);
      
    console.log(this.formOffre.value);},err =>{
    console.log(err)
    });
  }
  
 
  getOffres(): void{
    this.offService.getOffres().subscribe(data=>{
      console.log(data);
      this.listOffres.push(...data);},
      err=>console.log(err));
    }
    deleteOffre(offre: any): void {
      if (confirm('Are you sure you want to delete this Offre?')) {
        this.offService.deleteOffre(offre.id).subscribe(
          () => {
            console.log('Offre deleted successfully');
            const index = this.listOffres.indexOf(offre);
            if (index !== -1) {
              this.listOffres.splice(index, 1);
            }
          },
          (err) => console.log(err)
        );
      }
      
    }
    closeEditForm(): void {
      this.selectedOffre = null;
    }
    openEditForm(Offre: any): void {
      this.selectedOffre = Offre;
    }
    submitEditForm(): void {
      this.offService.updateOffre(this.selectedOffre.id, this.selectedOffre )
        .subscribe(
          (data) => {
            console.log(data);
            
            this.closeEditForm();
            const index = this.listOffres.findIndex(e => e.id === this.selectedOffre.id);
            if (index !== -1) {
              this.listOffres[index] = data;
            }
            this.offService.getOffres().subscribe((data) => {
              this.offres = data;  });
          },
          (err) => console.log(err)
        );
    }
    
   

}
