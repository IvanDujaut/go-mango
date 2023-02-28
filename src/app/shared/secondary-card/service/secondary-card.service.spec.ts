import { TestBed } from '@angular/core/testing';

import { SecondaryCardService } from './secondary-card.service';

describe('SecondaryCardService', () => {
  let service: SecondaryCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecondaryCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
