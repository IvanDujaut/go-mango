import { TestBed } from '@angular/core/testing';

import { AllBenefitsService } from './all-benefits.viewmodel';

describe('AllBenefitsService', () => {
  let service: AllBenefitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllBenefitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
