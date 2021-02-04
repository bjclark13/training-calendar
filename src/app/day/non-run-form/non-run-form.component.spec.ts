import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonRunFormComponent } from './non-run-form.component';

describe('NonRunFormComponent', () => {
  let component: NonRunFormComponent;
  let fixture: ComponentFixture<NonRunFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonRunFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonRunFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
