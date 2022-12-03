import { Inject, Injectable } from '@angular/core';

import { ConfigurationService } from '@buildmotion/configuration';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { HttpSecurityRepositoryService } from './http-security-repository.service';
import { IBusinessProviderService } from './i-business-provider.service';

@Injectable({
  providedIn: 'root',
})
export class BusinessProviderService
  extends ServiceBase
  implements IBusinessProviderService
{
  constructor(
    @Inject(HttpServiceRepositoryService)
    public apiService: HttpServiceRepositoryService,
    public configService: ConfigurationService,
    loggingService: LoggingService,
    serviceContext: ServiceContext
  ) {
    super('BusinessProviderService', loggingService, serviceContext);
  }

  // someMethod<T>(someInput: string): Observable<ApiResponse<T>> {
  //   const action = new SomeAction<T>(someInput);
  //   action.Do(this);
  //   return action.response;
  // }
}
