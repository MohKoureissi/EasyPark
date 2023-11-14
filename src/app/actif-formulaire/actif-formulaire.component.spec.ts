import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActifFormulaireComponent } from './actif-formulaire.component';

describe('ActifFormulaireComponent', () => {
  let component: ActifFormulaireComponent;
  let fixture: ComponentFixture<ActifFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActifFormulaireComponent]
    });
    fixture = TestBed.createComponent(ActifFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
