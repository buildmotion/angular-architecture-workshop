import { Injectable } from '@angular/core';
import { accountInfo } from '@buildmotion/dashboard-types';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';

@Injectable()
export class NewAccountUiService extends ServiceBase {

  constructor(
    loggingService: LoggingService, serviceContext: ServiceContext) {
    super('NewAccountUIService', loggingService, serviceContext);
  }

  createAccount(newAccount: accountInfo.NewAccount) {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to create new account for [${newAccount.emailAddress ?? 'n/a'}]`);
  }
}
