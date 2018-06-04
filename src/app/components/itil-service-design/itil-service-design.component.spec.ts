import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ITILServiceDesignComponent } from './itil-service-design.component';

describe('ITILServiceDesignComponent', () => {
  let component: ITILServiceDesignComponent;
  let fixture: ComponentFixture<ITILServiceDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ITILServiceDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ITILServiceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
