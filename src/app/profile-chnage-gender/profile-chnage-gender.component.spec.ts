import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChnageGenderComponent } from './profile-chnage-gender.component';

describe('ProfileChnageGenderComponent', () => {
  let component: ProfileChnageGenderComponent;
  let fixture: ComponentFixture<ProfileChnageGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChnageGenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChnageGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
