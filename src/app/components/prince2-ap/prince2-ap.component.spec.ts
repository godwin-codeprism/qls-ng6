import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prince2APComponent } from './prince2-ap.component';

describe('Prince2APComponent', () => {
  let component: Prince2APComponent;
  let fixture: ComponentFixture<Prince2APComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prince2APComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prince2APComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
