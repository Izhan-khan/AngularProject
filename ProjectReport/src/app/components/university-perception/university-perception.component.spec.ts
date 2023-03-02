import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityPerceptionComponent } from './university-perception.component';

describe('UniversityPerceptionComponent', () => {
  let component: UniversityPerceptionComponent;
  let fixture: ComponentFixture<UniversityPerceptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityPerceptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityPerceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
