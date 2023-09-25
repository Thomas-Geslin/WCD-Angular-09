import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserKittenComponent } from './user-kitten.component';

describe('UserKittenComponent', () => {
  let component: UserKittenComponent;
  let fixture: ComponentFixture<UserKittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserKittenComponent]
    });
    fixture = TestBed.createComponent(UserKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
