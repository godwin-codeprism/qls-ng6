import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMPComponent } from './pmp.component';

describe('PMPComponent', () => {
  let component: PMPComponent;
  let fixture: ComponentFixture<PMPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
