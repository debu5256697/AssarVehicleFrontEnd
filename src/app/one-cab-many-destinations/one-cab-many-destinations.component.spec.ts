import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCabManyDestinationsComponent } from './one-cab-many-destinations.component';

describe('OneCabManyDestinationsComponent', () => {
  let component: OneCabManyDestinationsComponent;
  let fixture: ComponentFixture<OneCabManyDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCabManyDestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCabManyDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
