import { Injectable } from '@angular/core';
import { ConfigurationService } from '@buildmotion/configuration';
import { accountInfo, configInfo } from '@buildmotion/dashboard-types';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { HttpRequestMethod, HttpService } from '@buildmotion/http-service';
import { LoggingService } from '@buildmotion/logging';
import { IHttpServiceRepositoryService } from './i-http-service-repository.service';

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

  createAccount<T>(newAccount: accountInfo.NewAccount): any {
    /** 
     * 1. create options
     * 2. construct the HTTP client call;
     * 3. execute
     */
    const requestUrl = `${this.configService.settings.apiConfig.apiURL}/accounts`;
    // this.loggingService.log(this.serviceName, Severity.Information, `Preparing to call API to... ${requestUrl}`);
    const options = this.httpService.createOptions(HttpRequestMethod.post, this.httpService.createHeader(), requestUrl, newAccount, false);
    return this.httpService.execute(options);
  }
}
