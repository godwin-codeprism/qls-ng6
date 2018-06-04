import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILServiceStrategyComponent } from './itil-service-strategy.component';

describe('ITILServiceStrategyComponent', () => {
  let component: ITILServiceStrategyComponent;
  let fixture: ComponentFixture<ITILServiceStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILServiceStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILServiceStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
