import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatchbackCarBookComponent } from './hatchback-car-book.component';

describe('HatchbackCarBookComponent', () => {
  let component: HatchbackCarBookComponent;
  let fixture: ComponentFixture<HatchbackCarBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatchbackCarBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HatchbackCarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
