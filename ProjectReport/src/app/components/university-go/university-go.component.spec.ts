import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityGoComponent } from './university-go.component';

describe('UniversityGoComponent', () => {
  let component: UniversityGoComponent;
  let fixture: ComponentFixture<UniversityGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
