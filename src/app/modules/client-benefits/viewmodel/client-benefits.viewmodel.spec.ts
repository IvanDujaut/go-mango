import { TestBed } from '@angular/core/testing';

import { ClientBenefitsService } from './viewmodel';

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
