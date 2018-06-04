import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prince2PComponent } from './prince2-p.component';

describe('Prince2PComponent', () => {
  let component: Prince2PComponent;
  let fixture: ComponentFixture<Prince2PComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prince2PComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prince2PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
