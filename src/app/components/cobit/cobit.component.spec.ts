import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COBITComponent } from './cobit.component';

describe('COBITComponent', () => {
  let component: COBITComponent;
  let fixture: ComponentFixture<COBITComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COBITComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COBITComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
