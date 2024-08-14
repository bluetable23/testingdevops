import { TestBed } from '@angular/core/testing';
import { AuthguardGuard } from './authguard.guard';
import { AuthService } from "./auth.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthguardGuard', () => {
  let guard: AuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthguardGuard, AuthService]
    });
    guard = TestBed.inject(AuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
