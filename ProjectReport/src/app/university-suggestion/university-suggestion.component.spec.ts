import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitySuggestionComponent } from './university-suggestion.component';

describe('UniversitySuggestionComponent', () => {
  let component: UniversitySuggestionComponent;
  let fixture: ComponentFixture<UniversitySuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitySuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
