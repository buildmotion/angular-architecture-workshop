import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationContext, ConfigurationModule, ConfigurationService } from '@buildmotion/configuration';
import { ErrorHandlingModule } from '@buildmotion/error-handling';
import { HttpErrorInterceptor, HttpServiceModule, IHttpOptions } from '@buildmotion/http-service';
import { ConsoleWriter, DataDogWriterService, LoggingModule, LoggingService } from '@buildmotion/logging';
import { AppConfig } from './../../config/app-config';
import { NotificationService } from '@buildmotion/notifications';

/**
 * The factory function to initialize the logging service and writer for the
 * application.
 *
 * @param loggingService
 * @param consoleWriter
 */
export function initializeLogWriter(loggingService: LoggingService, consoleWriter: ConsoleWriter) {
  return () => {
    return consoleWriter;
  };
}

const INTERCEPTORS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  },
];

const errorHandlingOptions = {
  applicationName: AppConfig.errorHandlingConfig.applicationName,
  includeDefaultErrorHandling: AppConfig.errorHandlingConfig.includeDefaultErrorHandling
}

const httpOptions: IHttpOptions = {
  apiURL: AppConfig.apiConfig.apiURL,
  baseUrl: AppConfig.apiConfig.baseUrl,
  csrf: AppConfig.apiConfig.csrf,
  health: AppConfig.apiConfig.health,
  version: AppConfig.apiConfig.version
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigurationModule.forRoot({ config: AppConfig }),
    ErrorHandlingModule.forRoot(errorHandlingOptions),
    LoggingModule.forRoot(AppConfig.dataDogConfig, AppConfig.loggingConfig),
    HttpServiceModule.forRoot(httpOptions)
  ]
})
export class CrossCuttingModule {
  public static forRoot(): ModuleWithProviders<CrossCuttingModule> {
    return {
      ngModule: CrossCuttingModule,
      providers: [
        LoggingService,
        ConsoleWriter,
        DataDogWriterService,
        {
          provide: APP_INITIALIZER,
          useFactory: initializeLogWriter,
          deps: [
            LoggingService,
            ConsoleWriter,
          ],
          multi: true,
        },
        {
          provide: ConfigurationContext,
          useValue: { config: AppConfig },
        },
        ConfigurationService<typeof AppConfig>,
        NotificationService,
        ...INTERCEPTORS
      ]
    }
  }
}
