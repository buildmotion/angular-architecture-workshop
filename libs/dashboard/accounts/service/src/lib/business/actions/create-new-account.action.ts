import { ApiResponse } from '@buildmotion/core';
import { accountInfo } from '@buildmotion/dashboard-types';
import { Severity } from '@buildmotion/logging';
import { IsNotNullOrUndefined, IsTrue } from '@buildmotion/rules-engine';
import { Guid } from 'guid-typescript';
import { of } from 'rxjs';
import { BusinessActionBase } from './business-action-base';

/**
 * Use this action to perform business logic with validation and business rules.
 */
export class CreateNewAccountAction<T> extends BusinessActionBase<T> {
  constructor(private newAccount: accountInfo.NewAccount) {
    super('CreateNewAccountAction');
  }

  /**
   * Use the [preValidateAction] to add any business or validation rules that
   * are required to pass in order to perform the action.
   *
   * Use the [ValidationContext] item of the action to add rules. The ValidationContext
   * uses a Fluent API to allow for chained rules to be configured.
   */
  override preValidateAction() {
    this.validationContext.addRule(
      new IsNotNullOrUndefined(
        '[newAccount]IsNotNullOrUndefined',
        'The [newAccount] object cannot be null or undefined.',
        this.newAccount,
        this.showRuleMessages
      )
    );

    if (this.newAccount) {
      // FIXME: ADD MORE RULES FOR VALIDATION

      // ACCEPT TERMS
      this.validationContext.addRule(
        new IsTrue(
          'AcceptTermsConditions',
          'Terms and conditions must be accepted.',
          this.newAccount.acceptTermsConditions,
          this.showRuleMessages
        )
      );
    }
  }

  /**
   * Use the [performAction] operation to execute the target of the action's business logic. This
   * will only run if the rules and validations are successful.
   */
  override performAction() {
    this.loggingService.log(
      this.actionName,
      Severity.Information,
      `Preparing to call API to complete action.`
    );
    //this.response = this.businessProvider.apiService.doSomething<T>(someInput);

    // FIXME: WIRE-UP TO REAL API WHEN AVAILABLE; RETURN MOCK
    const newAccountResponse: accountInfo.NewAccountResponse = {
      accountId: Guid.create().toString(),
      emailAddress: this.newAccount.emailAddress,
      userId: Guid.create().toString(),
    }

    const apiResponse: ApiResponse<accountInfo.NewAccountResponse> = {
      id: Guid.create().toString(),
      isSuccess: true,
      message: `Successfully created new account for ${this.newAccount.emailAddress}`,
      messages: [],
      timestamp: new Date(),
      data: newAccountResponse
    }

    // return an Observable...
    this.response = of(apiResponse);
  }
}
