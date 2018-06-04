import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILServiceTransitionComponent } from './itil-service-transition.component';

describe('ITILServiceTransitionComponent', () => {
  let component: ITILServiceTransitionComponent;
  let fixture: ComponentFixture<ITILServiceTransitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILServiceTransitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILServiceTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
