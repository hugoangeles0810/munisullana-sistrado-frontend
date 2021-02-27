import { TestBed } from '@angular/core/testing';

import { GetTramiteDetailService } from './get-tramite-detail.service';

describe('GetTramiteDetailService', () => {
  let service: GetTramiteDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTramiteDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
