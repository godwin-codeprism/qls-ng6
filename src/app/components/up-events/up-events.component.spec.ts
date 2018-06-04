import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpEventsComponent } from './up-events.component';

describe('UpEventsComponent', () => {
  let component: UpEventsComponent;
  let fixture: ComponentFixture<UpEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
