import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityOiComponent } from './university-oi.component';

describe('UniversityOiComponent', () => {
  let component: UniversityOiComponent;
  let fixture: ComponentFixture<UniversityOiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityOiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityOiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
