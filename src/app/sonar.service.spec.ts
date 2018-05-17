import { TestBed, inject } from '@angular/core/testing';

import { SonarService } from './sonar.service';

describe('SonarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SonarService]
    });
  });

  it('should be created', inject([SonarService], (service: SonarService) => {
    expect(service).toBeTruthy();
  }));
});
