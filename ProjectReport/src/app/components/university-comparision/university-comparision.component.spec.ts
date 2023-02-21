import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityComparisionComponent } from './university-comparision.component';

describe('UniversityComparisionComponent', () => {
  let component: UniversityComparisionComponent;
  let fixture: ComponentFixture<UniversityComparisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityComparisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
