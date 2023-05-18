import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AllcategoriesComponent } from './all-users.component';

describe('AllcategoriesComponent', () => {
  let component: AllcategoriesComponent;
  let fixture: ComponentFixture<AllcategoriesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
