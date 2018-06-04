import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RCVComponent } from './rcv.component';

describe('RCVComponent', () => {
  let component: RCVComponent;
  let fixture: ComponentFixture<RCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
