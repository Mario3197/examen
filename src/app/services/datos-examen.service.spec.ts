import { TestBed } from '@angular/core/testing';

import { DatosExamenService } from './datos-examen.service';

describe('DatosExamenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosExamenService = TestBed.get(DatosExamenService);
    expect(service).toBeTruthy();
  });
});
