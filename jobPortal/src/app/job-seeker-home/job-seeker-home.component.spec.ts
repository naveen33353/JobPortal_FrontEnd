import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSeekerHomeComponent } from './job-seeker-home.component';

describe('JobSeekerHomeComponent', () => {
  let component: JobSeekerHomeComponent;
  let fixture: ComponentFixture<JobSeekerHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JobSeekerHomeComponent]
    });
    fixture = TestBed.createComponent(JobSeekerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
