import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspendreFormulaireComponent } from './suspendre-formulaire.component';

describe('SuspendreFormulaireComponent', () => {
  let component: SuspendreFormulaireComponent;
  let fixture: ComponentFixture<SuspendreFormulaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuspendreFormulaireComponent]
    });
    fixture = TestBed.createComponent(SuspendreFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
