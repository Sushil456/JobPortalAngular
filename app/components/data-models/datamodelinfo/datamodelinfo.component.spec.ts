import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodelinfoComponent } from './datamodelinfo.component';

describe('DatamodelinfoComponent', () => {
  let component: DatamodelinfoComponent;
  let fixture: ComponentFixture<DatamodelinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatamodelinfoComponent]
    });
    fixture = TestBed.createComponent(DatamodelinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
