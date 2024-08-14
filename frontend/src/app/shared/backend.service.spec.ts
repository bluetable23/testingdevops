import { TestBed } from '@angular/core/testing';
import { BackendService } from './backend.service';
import { HttpClientModule } from "@angular/common/http";

describe('BackendService', () => {
  let service: BackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] // Fügt HttpClientModule in die Testkonfiguration ein
    });
    service = TestBed.inject(BackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
