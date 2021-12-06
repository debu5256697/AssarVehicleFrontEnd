import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EveryTravelPartner2Component } from './every-travel-partner2.component';

describe('EveryTravelPartner2Component', () => {
  let component: EveryTravelPartner2Component;
  let fixture: ComponentFixture<EveryTravelPartner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EveryTravelPartner2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EveryTravelPartner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
