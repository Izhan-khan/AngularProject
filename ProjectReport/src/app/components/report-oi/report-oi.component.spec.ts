import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportOiComponent } from './report-oi.component';

describe('ReportOiComponent', () => {
  let component: ReportOiComponent;
  let fixture: ComponentFixture<ReportOiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportOiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportOiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
