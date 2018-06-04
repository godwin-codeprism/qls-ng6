import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAFeComponent } from './safe.component';

describe('SAFeComponent', () => {
  let component: SAFeComponent;
  let fixture: ComponentFixture<SAFeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAFeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
