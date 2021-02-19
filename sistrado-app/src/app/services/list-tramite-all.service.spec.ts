import { TestBed } from '@angular/core/testing';

import { ListTramiteAllService } from './list-tramite-all.service';

describe('ListTramiteAllService', () => {
  let service: ListTramiteAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTramiteAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
