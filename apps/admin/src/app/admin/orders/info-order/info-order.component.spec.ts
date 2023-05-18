import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InfoOrderComponent } from './info-order.component';

describe('InfoOrderComponent', () => {
  let component: InfoOrderComponent;
  let fixture: ComponentFixture<InfoOrderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
