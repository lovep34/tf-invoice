import { TestBed, inject } from '@angular/core/testing';

import { InvoicelistService } from './invoicelist.service';

describe('InvoicelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvoicelistService]
    });
  });

  it('should be created', inject([InvoicelistService], (service: InvoicelistService) => {
    expect(service).toBeTruthy();
  }));
});
