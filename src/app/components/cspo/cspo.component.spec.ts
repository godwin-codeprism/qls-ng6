import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSPOComponent } from './cspo.component';

describe('CSPOComponent', () => {
  let component: CSPOComponent;
  let fixture: ComponentFixture<CSPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
