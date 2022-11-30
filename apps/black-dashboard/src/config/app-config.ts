import { ErrorHandlingOptions } from "@buildmotion/error-handling";
import { DataDogOptions, LoggingConfig } from "@buildmotion/logging";
import { IAPIConfig } from "./i-api-config";
import { IWebConfig } from "./i-web-config";


export interface IConfiguration {
    apiConfig: IAPIConfig,
    dataDogConfig: DataDogOptions,
    errorHandlingConfig: ErrorHandlingOptions,
    loggingConfig: LoggingConfig,
    webConfig: IWebConfig
}

export const AppConfig: IConfiguration = {
    apiConfig: {
        apiURL: 'https://api-dev.bv-bim.com/api',
        baseUrl: '',
        csrf: '',
        health: '',
        version: ''
    },
    dataDogConfig: {
        logs: {
            clientToken: 'pub905382b0fa24bc2f51efa742260ef110',
            forwardErrorsToLogs: true,
            sampleRate: 4,
            site: 'bv-bim.com'
        },
        realUserMonitoring: {
            applicationId: '55f62565-9fec-48cc-9987-813bb6d1185d',
            clientToken: 'pubf256b5f05b9a558b62821edc0947b4ec',
            site: 'datadoghq.com',
            service: 'test-app',
            env: '',
            version: '1.0.0',
            sampleRate: 100,
            premiumSampleRate: 100,
            trackInteractions: true,
            defaultPrivacyLevel: 'mask-user-input'
        }
    },
    errorHandlingConfig: {
        applicationName: 'bv-bim.com',
        includeDefaultErrorHandling: true
    },
    loggingConfig: {
        applicationName: 'bv-bim.com',
        isProduction: false
    },
    webConfig: {
        applicationName: 'creatr',
        blogURL: 'https://www.medium.com/@angularlicious',
        companyName: 'Creatr',
        companyEffectiveDate: new Date(2020, 10, 1),
        email: 'creatr@buildmotion.com',
        social: {
            github: {
                name: 'Angular Workspace (course repository)',
                URL: 'https://gitlab.com/angular-architecture/angular-workspace',
            },
            instagram: {
                name: 'AngularArchitecture',
                URL: 'https://www.instagram.com/AngularArchitecture/',
            },
            twitter: { name: '@AngularArch', URL: 'https://twitter.com/AngularArch' },
        },
        version: '',
        website: 'Creatr',
        defaultPageSize: 25,
        googleTagManagerId: 'GTM-JHHJJH',
        keywordValidationInMilliseconds: 750,
        pageSizeOptions: [25, 50, 100],
        reloadDelayAfterNoticeInMinutes: 0,
        reloadDelayInMinutes: 1439,
        reloadNoticeDisplayInSeconds: 30,
    },
};