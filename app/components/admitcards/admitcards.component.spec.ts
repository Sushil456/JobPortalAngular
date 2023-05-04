import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitcardsComponent } from './admitcards.component';

describe('AdmitcardsComponent', () => {
  let component: AdmitcardsComponent;
  let fixture: ComponentFixture<AdmitcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmitcardsComponent]
    });
    fixture = TestBed.createComponent(AdmitcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
