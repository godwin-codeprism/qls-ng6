import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackBeltComponent } from './black-belt.component';

describe('BlackBeltComponent', () => {
  let component: BlackBeltComponent;
  let fixture: ComponentFixture<BlackBeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackBeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
