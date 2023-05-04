import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsInfoComponent } from './jobs-info.component';

describe('JobsInfoComponent', () => {
  let component: JobsInfoComponent;
  let fixture: ComponentFixture<JobsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobsInfoComponent]
    });
    fixture = TestBed.createComponent(JobsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
