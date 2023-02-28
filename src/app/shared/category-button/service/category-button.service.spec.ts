import { TestBed } from '@angular/core/testing';

import { CategoryButtonService } from './category-button.service';

describe('CategoryButtonService', () => {
  let service: CategoryButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
