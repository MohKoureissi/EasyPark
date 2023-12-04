import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoitureModifierComponent } from './voiture-modifier.component';

describe('VoitureModifierComponent', () => {
  let component: VoitureModifierComponent;
  let fixture: ComponentFixture<VoitureModifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoitureModifierComponent]
    });
    fixture = TestBed.createComponent(VoitureModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
