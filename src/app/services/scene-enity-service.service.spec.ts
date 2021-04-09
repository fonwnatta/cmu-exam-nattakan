import { TestBed, inject } from '@angular/core/testing';

import { SceneEnityServiceService } from './scene-enity-service.service';

describe('SceneEnityServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneEnityServiceService]
    });
  });

  it('should ...', inject([SceneEnityServiceService], (service: SceneEnityServiceService) => {
    expect(service).toBeTruthy();
  }));
});
