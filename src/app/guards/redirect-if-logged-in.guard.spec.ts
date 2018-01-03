import { TestBed, async, inject } from '@angular/core/testing';

import { RedirectIfLoggedInGuard } from './redirect-if-logged-in.guard';

describe('RedirectIfLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectIfLoggedInGuard]
    });
  });

  it('should ...', inject([RedirectIfLoggedInGuard], (guard: RedirectIfLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
