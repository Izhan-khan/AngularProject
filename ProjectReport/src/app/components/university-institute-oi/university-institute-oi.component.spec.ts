import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstituteOiComponent } from './university-institute-oi.component';

describe('UniversityInstituteOiComponent', () => {
  let component: UniversityInstituteOiComponent;
  let fixture: ComponentFixture<UniversityInstituteOiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInstituteOiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInstituteOiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
