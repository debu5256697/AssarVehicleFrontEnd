import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNumberOtpComponent } from './mobile-number-otp.component';

describe('MobileNumberOtpComponent', () => {
  let component: MobileNumberOtpComponent;
  let fixture: ComponentFixture<MobileNumberOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileNumberOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNumberOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
