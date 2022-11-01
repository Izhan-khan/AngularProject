import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGoComponent } from './report-go.component';

describe('ReportGoComponent', () => {
  let component: ReportGoComponent;
  let fixture: ComponentFixture<ReportGoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
