import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstituteGoComponent } from './university-institute-go.component';

describe('UniversityInstituteGoComponent', () => {
  let component: UniversityInstituteGoComponent;
  let fixture: ComponentFixture<UniversityInstituteGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInstituteGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInstituteGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
