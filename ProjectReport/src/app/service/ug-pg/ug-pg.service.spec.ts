import { TestBed } from '@angular/core/testing';

import { UgPgService } from './ug-pg.service';

describe('UgPgService', () => {
  let service: UgPgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UgPgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
