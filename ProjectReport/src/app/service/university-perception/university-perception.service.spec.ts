import { TestBed } from '@angular/core/testing';

import { UniversityPerceptionService } from './university-perception.service';

describe('UniversityPerceptionService', () => {
  let service: UniversityPerceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniversityPerceptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
