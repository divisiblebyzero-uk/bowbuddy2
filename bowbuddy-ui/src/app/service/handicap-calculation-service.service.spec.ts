import { TestBed } from '@angular/core/testing';

import { HandicapCalculationService } from './handicap-calculation-service.service';

describe('HandicapCalculationServiceService', () => {
  let service: HandicapCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandicapCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
