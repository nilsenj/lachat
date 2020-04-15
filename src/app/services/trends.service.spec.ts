import { TestBed } from '@angular/core/testing';

import { TrendsService } from './trends.service';

describe('TrendsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrendsService = TestBed.get(TrendsService);
    expect(service).toBeTruthy();
  });
});
