import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleChooseComponent } from './vehicle-choose.component';

describe('VehicleChooseComponent', () => {
  let component: VehicleChooseComponent;
  let fixture: ComponentFixture<VehicleChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleChooseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
