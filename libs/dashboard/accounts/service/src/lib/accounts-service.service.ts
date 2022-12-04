import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { Inject, Injectable } from '@angular/core';
import { BusinessProviderService } from './business/business-provider.service';
import { accountInfo } from '@buildmotion/dashboard-types';
import { Observable } from 'rxjs';
import { ApiResponse } from '@buildmotion/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService extends ServiceBase {

  constructor(
    @Inject(BusinessProviderService)
    private businessProvider: BusinessProviderService,
    loggingService: LoggingService,
    serviceContext: ServiceContext
  ) {
    super('AccountsService', loggingService, serviceContext);
    this.businessProvider.serviceContext = this.serviceContext;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createAccount<T>(newAccount: accountInfo.NewAccount): Observable<ApiResponse<T>> {
    throw new Error('Method not implemented.');
  }
}
