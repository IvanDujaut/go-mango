import { TestBed } from '@angular/core/testing';

import { CategoryButtonService } from './category-button.viewmodel';

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
