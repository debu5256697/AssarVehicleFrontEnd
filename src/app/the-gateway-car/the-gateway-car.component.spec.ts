import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGatewayCarComponent } from './the-gateway-car.component';

describe('TheGatewayCarComponent', () => {
  let component: TheGatewayCarComponent;
  let fixture: ComponentFixture<TheGatewayCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGatewayCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGatewayCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
