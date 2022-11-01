import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportRpComponent } from './report-rp.component';

describe('ReportRpComponent', () => {
  let component: ReportRpComponent;
  let fixture: ComponentFixture<ReportRpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportRpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportRpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
