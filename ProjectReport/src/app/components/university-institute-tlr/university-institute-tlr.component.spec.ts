import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstituteTlrComponent } from './university-institute-tlr.component';

describe('UniversityInstituteTlrComponent', () => {
  let component: UniversityInstituteTlrComponent;
  let fixture: ComponentFixture<UniversityInstituteTlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInstituteTlrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInstituteTlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
