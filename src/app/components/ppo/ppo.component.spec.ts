import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPOComponent } from './ppo.component';

describe('PPOComponent', () => {
  let component: PPOComponent;
  let fixture: ComponentFixture<PPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
