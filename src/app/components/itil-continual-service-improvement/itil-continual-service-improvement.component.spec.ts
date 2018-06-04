import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILContinualServiceImprovementComponent } from './itil-continual-service-improvement.component';

describe('ITILContinualServiceImprovementComponent', () => {
  let component: ITILContinualServiceImprovementComponent;
  let fixture: ComponentFixture<ITILContinualServiceImprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILContinualServiceImprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILContinualServiceImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
