import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentBase } from '@buildmotion/foundation';
import { LoggingService, Severity } from '@buildmotion/logging';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bv-bim-my-app',
  templateUrl: './app.component.html'
})

export class AppComponent extends ComponentBase implements OnInit {
  private _router: Subscription;

  constructor(
    logger: LoggingService,
    router: Router) {
    super('AppComponent', logger, router);

    this.loggingService.log(this.componentName, Severity.Information, `Preparing to initialize the application component.`);
  }

  ngOnInit() {
    this.loggingService.log(this.componentName, Severity.Information, `Preparing to initialize the application component.`);
    // FIXME: HANDLE EVENT
    // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
    //   const body = document.getElementsByTagName('body')[0];
    //   const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
    //   if (body.classList.contains('modal-open')) {
    //     body.classList.remove('modal-open');
    //     modalBackdrop.remove();
    //   }
    // });

    throw new Error(`Happy little error here, right?`);
  }
}
