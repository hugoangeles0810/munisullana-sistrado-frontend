import { TestBed } from '@angular/core/testing';

import { UpdateProcedureService } from './update-procedure.service';

describe('UpdateProcedureService', () => {
  let service: UpdateProcedureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProcedureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
