import { TestBed } from '@angular/core/testing';
import { LoggingService, LoggingServiceMock } from '@buildmotion/logging';
import { AccountsService } from './accounts-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AccountsService', () => {
  let service: AccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: LoggingService,
          useClass: LoggingServiceMock,
        },
      ],
    });
    service = TestBed.inject(AccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
