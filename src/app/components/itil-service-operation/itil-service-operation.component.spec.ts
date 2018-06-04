import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILServiceOperationComponent } from './itil-service-operation.component';

describe('ITILServiceOperationComponent', () => {
  let component: ITILServiceOperationComponent;
  let fixture: ComponentFixture<ITILServiceOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILServiceOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILServiceOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
