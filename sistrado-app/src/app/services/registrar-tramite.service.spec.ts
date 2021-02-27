import { TestBed } from '@angular/core/testing';

import { RegistrarTramiteService } from './registrar-tramite.service';

describe('RegistrarTramiteService', () => {
  let service: RegistrarTramiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarTramiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
