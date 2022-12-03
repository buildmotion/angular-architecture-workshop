import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService } from '@buildmotion/logging';
import { Inject, Injectable } from '@angular/core';
import { BusinessProviderService } from './business/business-provider.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceService extends ServiceBase {
  constructor(
    @Inject(BusinessProviderService)
    private businessProvider: BusinessProviderService,
    loggingService: LoggingService,
    serviceContext: ServiceContext
  ) {
    super('ServiceService', loggingService, serviceContext);
    this.businessProvider.serviceContext = this.serviceContext;
  }
}
