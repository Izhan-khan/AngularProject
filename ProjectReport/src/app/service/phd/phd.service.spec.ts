import { TestBed } from '@angular/core/testing';

import { PhdService } from './phd.service';

describe('PhdService', () => {
  let service: PhdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
