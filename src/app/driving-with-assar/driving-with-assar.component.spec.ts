import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingWithAssarComponent } from './driving-with-assar.component';

describe('DrivingWithAssarComponent', () => {
  let component: DrivingWithAssarComponent;
  let fixture: ComponentFixture<DrivingWithAssarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingWithAssarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingWithAssarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
