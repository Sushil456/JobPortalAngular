import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestjobsComponent } from './latestjobs.component';

describe('LatestjobsComponent', () => {
  let component: LatestjobsComponent;
  let fixture: ComponentFixture<LatestjobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestjobsComponent]
    });
    fixture = TestBed.createComponent(LatestjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
