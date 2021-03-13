import { TestBed } from '@angular/core/testing';

import { GetProcedureDetailService } from './get-procedure-detail.service';

describe('GetProcedureDetailService', () => {
  let service: GetProcedureDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProcedureDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
