import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPerceptionPersonalInfoComponent } from './university-perception-personal-info.component';

describe('UniversityPerceptionPersonalInfoComponent', () => {
  let component: UniversityPerceptionPersonalInfoComponent;
  let fixture: ComponentFixture<UniversityPerceptionPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPerceptionPersonalInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityPerceptionPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
