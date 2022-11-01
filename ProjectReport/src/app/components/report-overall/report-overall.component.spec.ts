import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOverallComponent } from './report-overall.component';

describe('ReportOverallComponent', () => {
  let component: ReportOverallComponent;
  let fixture: ComponentFixture<ReportOverallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOverallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
