import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankuBookingComponent } from './thanku-booking.component';

describe('ThankuBookingComponent', () => {
  let component: ThankuBookingComponent;
  let fixture: ComponentFixture<ThankuBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankuBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankuBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
