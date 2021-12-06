import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouVehiclenameComponent } from './thankyou-vehiclename.component';

describe('ThankyouVehiclenameComponent', () => {
  let component: ThankyouVehiclenameComponent;
  let fixture: ComponentFixture<ThankyouVehiclenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouVehiclenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouVehiclenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
