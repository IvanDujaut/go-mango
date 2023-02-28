import { TestBed } from '@angular/core/testing';

import { ClientBenefitsService } from './client-benefits.service';

describe('ClientBenefitsService', () => {
  let service: ClientBenefitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientBenefitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
