import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SIAMComponent } from './siam.component';

describe('SIAMComponent', () => {
  let component: SIAMComponent;
  let fixture: ComponentFixture<SIAMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIAMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
