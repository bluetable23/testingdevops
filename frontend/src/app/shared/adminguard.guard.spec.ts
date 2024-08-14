import { TestBed } from '@angular/core/testing';
import { AdminguardGuard } from './adminguard.guard';
import { AuthService } from "./auth.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminguardGuard', () => {
  let guard: AdminguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,  // Fügt die HttpClient Abhängigkeit hinzu
      ],
      providers: [
        AdminguardGuard,
        AuthService
      ]
    });
    guard = TestBed.inject(AdminguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
