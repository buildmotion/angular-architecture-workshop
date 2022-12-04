import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComponentBase } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';
import { NewAccountUiService } from './new-account-ui.service';
import { accountInfo } from '@buildmotion/dashboard-types';

@Component({
  selector: 'buildmotion-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent extends ComponentBase implements OnInit {

  form: FormGroup;

  // shared password validators;
  private passwordValidators = [Validators.required, Validators.minLength(8), Validators.maxLength(128)];

  constructor(
    private formBuilder: FormBuilder,
    private uiService: NewAccountUiService,
    loggingService: LoggingService,
    router: Router
  ) {
    super('NewAccountComponent', loggingService, router);
  }

  ngOnInit(): void {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to initialize component.`);
    this.initializeForm();
  }

  initializeForm() {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to initialize the create account form.`);
    this.form = this.formBuilder.group({
      emailAddress: new FormControl(undefined, {
        validators: [Validators.required, Validators.maxLength(100)],
        asyncValidators: [
          // ADD ASYNC EMAIL VALIDATION HERE;
        ],
        updateOn: 'blur',
      }),
      password: new FormControl(undefined, {
        validators: [...this.passwordValidators],
        asyncValidators: [],
      }),
      passwordConfirm: new FormControl(undefined, {
        validators: [...this.passwordValidators],
        updateOn: 'change',
      }),
      acceptTermsConditions: new FormControl(false, {
        validators: [Validators.required]
      })
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.loggingService.log(this.componentName, Severity.Information, `Preparing to submit/process account information.`);
      const newAccount: accountInfo.NewAccount = { ...this.form.value };
      this.uiService.createAccount(newAccount);
    } else {
      this.loggingService.log(this.componentName, Severity.Information, `Attempting to submit invalid form to create new account.`);
    }
  }

  get acceptTermsConditions(): AbstractControl | null {
    return this.form.get('acceptTermsConditions');
  }

  get emailAddress(): AbstractControl {
    return this.form.get('emailAddress') as FormControl;
  }

  get passwordConfirm(): AbstractControl {
    return this.form.get('passwordConfirm') as FormControl;
  }

  get password(): AbstractControl {
    return this.form.get('password') as FormControl;
  }
}