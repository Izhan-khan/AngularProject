import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOverallComponent } from './university-overall.component';

describe('UniversityOverallComponent', () => {
  let component: UniversityOverallComponent;
  let fixture: ComponentFixture<UniversityOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityOverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
