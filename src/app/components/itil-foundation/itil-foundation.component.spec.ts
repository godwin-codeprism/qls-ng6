import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILFoundationComponent } from './itil-foundation.component';

describe('ITILFoundationComponent', () => {
  let component: ITILFoundationComponent;
  let fixture: ComponentFixture<ITILFoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILFoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
