import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TOGAFComponent } from './togaf.component';

describe('TOGAFComponent', () => {
  let component: TOGAFComponent;
  let fixture: ComponentFixture<TOGAFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TOGAFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TOGAFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
