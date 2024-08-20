import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDomaineComponent } from './gestion-domaine.component';

describe('GestionDomaineComponent', () => {
  let component: GestionDomaineComponent;
  let fixture: ComponentFixture<GestionDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDomaineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
