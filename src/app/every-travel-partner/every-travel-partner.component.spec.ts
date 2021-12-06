import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryTravelPartnerComponent } from './every-travel-partner.component';

describe('EveryTravelPartnerComponent', () => {
  let component: EveryTravelPartnerComponent;
  let fixture: ComponentFixture<EveryTravelPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryTravelPartnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryTravelPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
