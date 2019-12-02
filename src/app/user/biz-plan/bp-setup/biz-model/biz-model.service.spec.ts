import { TestBed } from '@angular/core/testing';

import { BizModelService } from './biz-model.service';

describe('BizModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BizModelService = TestBed.get(BizModelService);
    expect(service).toBeTruthy();
  });
});
