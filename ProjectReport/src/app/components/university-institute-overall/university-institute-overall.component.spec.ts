import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstituteOverallComponent } from './university-institute-overall.component';

describe('UniversityInstituteOverallComponent', () => {
  let component: UniversityInstituteOverallComponent;
  let fixture: ComponentFixture<UniversityInstituteOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInstituteOverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInstituteOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
