import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTlrComponent } from './report-tlr.component';

describe('ReportTlrComponent', () => {
  let component: ReportTlrComponent;
  let fixture: ComponentFixture<ReportTlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTlrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
