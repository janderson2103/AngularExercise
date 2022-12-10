import { TestBed } from '@angular/core/testing';

import { FixerInterceptorProvider } from './fixer.interceptor';

describe('FixerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FixerInterceptorProvider
      ]
  }));

  it('should be created', () => {
    const interceptor: FixerInterceptorProvider = TestBed.inject(FixerInterceptorProvider);
    expect(interceptor).toBeTruthy();
  });
});
