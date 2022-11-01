import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityRpComponent } from './university-rp.component';

describe('UniversityRpComponent', () => {
  let component: UniversityRpComponent;
  let fixture: ComponentFixture<UniversityRpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityRpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
