import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryTravelPartner1Component } from './every-travel-partner1.component';

describe('EveryTravelPartner1Component', () => {
  let component: EveryTravelPartner1Component;
  let fixture: ComponentFixture<EveryTravelPartner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryTravelPartner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryTravelPartner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
