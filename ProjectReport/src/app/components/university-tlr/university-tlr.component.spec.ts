import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityTlrComponent } from './university-tlr.component';

describe('UniversityTlrComponent', () => {
  let component: UniversityTlrComponent;
  let fixture: ComponentFixture<UniversityTlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityTlrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityTlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
