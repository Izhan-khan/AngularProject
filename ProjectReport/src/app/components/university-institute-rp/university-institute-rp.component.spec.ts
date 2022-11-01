import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityInstituteRpComponent } from './university-institute-rp.component';

describe('UniversityInstituteRpComponent', () => {
  let component: UniversityInstituteRpComponent;
  let fixture: ComponentFixture<UniversityInstituteRpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityInstituteRpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityInstituteRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
