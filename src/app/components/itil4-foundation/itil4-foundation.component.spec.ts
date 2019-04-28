import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Itil4FoundationComponent } from './itil4-foundation.component';

describe('Itil4FoundationComponent', () => {
  let component: Itil4FoundationComponent;
  let fixture: ComponentFixture<Itil4FoundationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Itil4FoundationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Itil4FoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
