import { TestBed } from '@angular/core/testing';

import { AlertNewProcedureService } from './alert-new-procedure.service';

describe('AlertNewProcedureService', () => {
  let service: AlertNewProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertNewProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
