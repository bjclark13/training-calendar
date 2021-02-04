import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDisplayComponent } from './workout-display.component';

describe('WorkoutDisplayComponent', () => {
  let component: WorkoutDisplayComponent;
  let fixture: ComponentFixture<WorkoutDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
