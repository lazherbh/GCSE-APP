import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporterCvComponent } from './importer-cv.component';

describe('ImporterCvComponent', () => {
  let component: ImporterCvComponent;
  let fixture: ComponentFixture<ImporterCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImporterCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImporterCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
