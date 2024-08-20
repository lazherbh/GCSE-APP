import { Component, Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css'],

})
export class JobDetailComponent {
  job: any;

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.job = JSON.parse(params['job']);
    });
  }

  postuler(){
    this.router.navigate(['/cv'] );
  
  }
}
