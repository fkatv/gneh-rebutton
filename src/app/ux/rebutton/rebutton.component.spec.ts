import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RebuttonComponent } from './rebutton.component';

describe('RebuttonComponent', () => {
  let component: RebuttonComponent;
  let fixture: ComponentFixture<RebuttonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RebuttonComponent]
    });
    fixture = TestBed.createComponent(RebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
