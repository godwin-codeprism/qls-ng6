import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAPMComponent } from './capm.component';

describe('CAPMComponent', () => {
  let component: CAPMComponent;
  let fixture: ComponentFixture<CAPMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAPMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
