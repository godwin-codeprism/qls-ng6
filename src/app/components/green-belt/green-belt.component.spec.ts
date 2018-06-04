import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenBeltComponent } from './green-belt.component';

describe('GreenBeltComponent', () => {
  let component: GreenBeltComponent;
  let fixture: ComponentFixture<GreenBeltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenBeltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBeltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
