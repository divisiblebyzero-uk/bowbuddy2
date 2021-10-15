import { TestBed } from '@angular/core/testing';

import { HandicapCalculationServiceService } from './handicap-calculation-service.service';

describe('HandicapCalculationServiceService', () => {
  let service: HandicapCalculationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandicapCalculationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
