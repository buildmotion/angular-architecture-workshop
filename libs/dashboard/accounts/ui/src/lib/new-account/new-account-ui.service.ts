import { Injectable } from '@angular/core';
import { ApiResponse } from '@buildmotion/core';
import { AccountsService } from '@buildmotion/dashboard-accounts-service';
import { accountInfo } from '@buildmotion/dashboard-types';
import { ServiceBase, ServiceContext } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';

@Injectable()
export class NewAccountUiService extends ServiceBase {

  constructor(
    loggingService: LoggingService,
    serviceContext: ServiceContext,
    private accountsService: AccountsService) {
    super('NewAccountUIService', loggingService, serviceContext);
  }

  createAccount(newAccount: accountInfo.NewAccount) {
    this.loggingService.log(this.serviceName, Severity.Information, `Preparing to create new account for [${newAccount.emailAddress ?? 'n/a'}]`);
    this.accountsService.createAccount<accountInfo.NewAccountResponse>(newAccount).subscribe(
      (response) => this.handleCreateAccountResponse<accountInfo.NewAccountResponse>(response),
      (error) => this.handleCreateAccountError(error),
      () => this.finishCreateAccount()
    );
  }

  private handleCreateAccountResponse<T>(response: ApiResponse<T>): void {
    if (response) {
      if (response.isSuccess) {
        this.loggingService.log(this.serviceName, Severity.Information, `Preparing to handle successful response for [create new account].`);
      } else {
        this.loggingService.log(this.serviceName, Severity.Warning, `Preparing to handle failed/unsuccessful response for [create new account].`);
        // TODO: HANDLE ANY [unsuccess] MESSAGES, NOTIFICATIONS, UI/UX CHANGES;
      }
    } else {
      this.loggingService.log(this.serviceName, Severity.Warning, `Received unexpected null/undefined response for [create new account].`);
      // TODO: HANDLE ANY ERROR MESSAGES, NOTIFICATIONS, UI/UX CHANGES;
    }
  }

  private handleCreateAccountError(error: Error): void {
    // TODO: HANDLE ANY [error] MESSAGES, NOTIFICATIONS, UI/UX CHANGES;
    this.loggingService.log(this.serviceName, Severity.Error, error.message);
  }

  private finishCreateAccount(): void {
    // TODO: HANDLE ANY [finish] MESSAGES, NOTIFICATIONS, UI/UX CHANGES;
  }
}
