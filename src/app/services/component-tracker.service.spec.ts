import { TestBed } from '@angular/core/testing';

import { ComponentTrackerService } from './component-tracker.service';

describe('ComponentTrackerService', () => {
  let service: ComponentTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
