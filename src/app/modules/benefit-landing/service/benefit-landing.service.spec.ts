import { TestBed } from '@angular/core/testing';

import { BenefitLandingService } from './benefit-landing.service';

describe('BenefitLandingService', () => {
  let service: BenefitLandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitLandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
