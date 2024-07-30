import { Component, OnInit } from '@angular/core';
import { OffreService } from '../_services/offre.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public listOffres: any[]=[];
  constructor(private offService: OffreService) { }

  ngOnInit(): void {
    this.getOffres();
  }
 
  getOffres(): void{
    this.offService.getOffres().subscribe(data=>{
      console.log(data);
      this.listOffres.push(...data);},
      err=>console.log(err));
    }

}
