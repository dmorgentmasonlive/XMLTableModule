import { TestBed } from '@angular/core/testing';

import { XMLService } from './xml.service';

describe('XMLService', () => {
  let service: XMLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XMLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
