import { Component, OnInit } from '@angular/core';
import { CompetanceService } from 'src/app/_services/competance.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-gestion-competance',
  templateUrl: './gestion-competance.component.html',
  styleUrls: ['./gestion-competance.component.css']
})
export class GestionCompetanceComponent implements OnInit {

  public listCompetances: any[]=[];
public competances: any[] = [];
public selectedCompetance: any = null;
formCompetance!: FormGroup;
submitted: boolean=false;

  constructor(private competanceService: CompetanceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getCompetances();
    this.formCompetance = this.fb.group({
      nomCompetence: ['', Validators.required],
      niveauRequis: ['', Validators.required],
      
     })

  }
  
  submit(): void{
      this.competanceService.postCompetance(this.formCompetance.value).subscribe(data => {
        console.log(data);
        
      console.log(this.formCompetance.value);},err =>{
      console.log(err)
      });
    }
  getCompetances(): void{
    this.competanceService.getCompetances().subscribe(data=>{
      console.log(data);
      this.listCompetances.push(...data);},
      err=>console.log(err));
    }
    deleteCompetance(competance: any): void {
      if (confirm('Are you sure you want to delete this competance?')) {
        this.competanceService.deleteCompetance(competance.id).subscribe(
          () => {
            console.log('Competance deleted successfully');
            const index = this.listCompetances.indexOf(competance);
            if (index !== -1) {
              this.listCompetances.splice(index, 1);
            }
          },
          (err) => console.log(err)
        );
      }
      
    }
    closeEditForm(): void {
      this.selectedCompetance = null;
    }
    openEditForm(competance: any): void {
      this.selectedCompetance = competance;
    }
    submitEditForm(): void {
      this.competanceService.updateCompetance(this.selectedCompetance.id, this.selectedCompetance )
        .subscribe(
          (data) => {
            console.log(data);
            
            this.closeEditForm();
            const index = this.listCompetances.findIndex(e => e.id === this.selectedCompetance.id);
            if (index !== -1) {
              this.listCompetances[index] = data;
            }
            this.competanceService.getCompetances().subscribe((data) => {
              this.competances = data;  });
          },
          (err) => console.log(err)
        );
    }
    
 


}
