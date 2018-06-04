import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prince2FComponent } from './prince2-f.component';

describe('Prince2FComponent', () => {
  let component: Prince2FComponent;
  let fixture: ComponentFixture<Prince2FComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prince2FComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prince2FComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
