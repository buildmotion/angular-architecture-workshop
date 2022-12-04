import { ConfigurationService } from '@buildmotion/configuration';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { HttpService } from '@buildmotion/http-service';
import { LoggingService } from '@buildmotion/logging';
import { Injectable } from '@angular/core';
import { IHttpServiceRepositoryService } from './i-http-service-repository.service';
import { configInfo } from '@buildmotion/dashboard-types';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceRepositoryService
  extends ServiceBase
  implements IHttpServiceRepositoryService
{
  constructor(
    private httpService: HttpService,
    private configService: ConfigurationService<configInfo.IConfiguration>,
    loggingService: LoggingService,
    serviceContext: ServiceContext
  ) {
    super('HttpServiceRepositoryService', loggingService, serviceContext);
  }

  // performService<T>(someInput: string): Observable<any> {
  //   const requestUrl = `${this.configService.settings.appConfig.apiURL}VerifyMonitoredTerm`;
  //   this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to... `);
  //   const options = this.httpService.createOptions(HttpRequestMethod.post, this.httpService.createHeader(), requestUrl, someInput, false);
  //   return this.httpService.execute(options);
  // }
}
