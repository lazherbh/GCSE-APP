import { Component, OnInit } from '@angular/core';
import { OffreService } from '../../_services/offre.service';
import { MatDialog } from '@angular/material/dialog';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  public listOffres: any[]=[];
  constructor(private offService: OffreService,private router: Router) { }

  ngOnInit(): void {
    this.getOffres();
  }
  
 
  getOffres(): void{
    this.offService.getOffres().subscribe(data=>{
      console.log(data);
      this.listOffres.push(...data);},
      err=>console.log(err));
    }
   

    viewMore(job: any) {
      this.router.navigate(['/detail'], { queryParams: { job: JSON.stringify(job) } });
    }
}
