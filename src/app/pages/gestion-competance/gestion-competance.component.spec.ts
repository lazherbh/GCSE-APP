import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompetanceComponent } from './gestion-competance.component';

describe('GestionCompetanceComponent', () => {
  let component: GestionCompetanceComponent;
  let fixture: ComponentFixture<GestionCompetanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompetanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompetanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
