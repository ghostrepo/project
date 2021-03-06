import { TestBed } from '@angular/core/testing';

import { ApplianceService } from './appliance.service';

describe('ApplianceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplianceService = TestBed.get(ApplianceService);
    expect(service).toBeTruthy();
  });
});
