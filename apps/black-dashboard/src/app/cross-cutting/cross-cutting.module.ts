import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { ConfigurationContext, ConfigurationService } from '@buildmotion/configuration';
import { ErrorHandlingModule } from '@buildmotion/error-handling';
import { HttpErrorInterceptor } from '@buildmotion/http-service';
import { ConsoleWriter, DataDogWriterService, LoggingModule, LoggingService } from '@buildmotion/logging';
import { AppConfig, IConfiguration } from './../../config/app-config';

/**
 * The factory function to initialize the configuration service for the application.
 * @param configService
 */
export function initializeConfiguration<T>(configContext: ConfigurationContext<T>, configService: ConfigurationService<T>) {
  return () => {
    configService.settings = configContext.config;
    return configService;
  };
}

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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErrorHandlingModule.forRoot(errorHandlingOptions),
    LoggingModule.forRoot(AppConfig.dataDogConfig, AppConfig.loggingConfig),
  ]
})
export class CrossCuttingModule<T extends IConfiguration> {
  public static forRoot(): ModuleWithProviders<CrossCuttingModule<any>> {
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
        ConfigurationService,
        ...INTERCEPTORS
      ]
    }
  }
}
