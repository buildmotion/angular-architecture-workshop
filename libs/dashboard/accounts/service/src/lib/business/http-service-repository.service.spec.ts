import { TestBed } from '@angular/core/testing';

import { HttpServiceRepositoryService } from './http-service-repository.service';
import { HttpClientModule } from '@angular/common/http';
import {
  ConfigurationService,
  ConfigurationServiceMock,
} from '@buildmotion/configuration';
import { LoggingService, LoggingServiceMock } from '@buildmotion/logging';

describe('HttpServiceRepositoryService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: ConfigurationService,
          useClass: ConfigurationServiceMock,
        },
        {
          provide: LoggingService,
          useClass: LoggingServiceMock,
        },
      ],
    })
  );

  it('should be created', () => {
    const service: HttpServiceRepositoryService = TestBed.get(
      HttpServiceRepositoryService
    );
    expect(service).toBeTruthy();
  });
});
