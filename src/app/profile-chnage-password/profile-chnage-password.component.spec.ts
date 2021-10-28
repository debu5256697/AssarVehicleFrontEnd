import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileChnagePasswordComponent } from './profile-chnage-password.component';

describe('ProfileChnagePasswordComponent', () => {
  let component: ProfileChnagePasswordComponent;
  let fixture: ComponentFixture<ProfileChnagePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileChnagePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileChnagePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
