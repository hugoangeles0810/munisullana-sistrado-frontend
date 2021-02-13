import { TestBed } from '@angular/core/testing';

import { ListProceduresService } from './list-procedures.service';

describe('ListProceduresService', () => {
  let service: ListProceduresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProceduresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
