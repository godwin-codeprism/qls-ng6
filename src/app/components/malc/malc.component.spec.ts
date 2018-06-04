import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MALCComponent } from './malc.component';

describe('MALCComponent', () => {
  let component: MALCComponent;
  let fixture: ComponentFixture<MALCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MALCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MALCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
