import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityEstimatedRankingComponent } from './university-estimated-ranking.component';

describe('UniversityEstimatedRankingComponent', () => {
  let component: UniversityEstimatedRankingComponent;
  let fixture: ComponentFixture<UniversityEstimatedRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityEstimatedRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityEstimatedRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
