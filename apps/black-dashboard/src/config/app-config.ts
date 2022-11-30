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
        apiURL: 'https://api-dev.dashboard/api',
        baseUrl: '',
        csrf: '',
        health: '',
        version: ''
    },
    dataDogConfig: {
        logs: {
            clientToken: 'pubb4184308df8ee85b01a4a770e4a2dc8a',
            forwardErrorsToLogs: true,
            sampleRate: 4,
            site: 'Dashboard Demo in Clearwater'
        },
        realUserMonitoring: {
            applicationId: '1ce4038b-543a-43fb-bef4-33945b3e962c',
            clientToken: 'pubf6c676607c0a8bc7a4d801d5609a8e05',
            site: 'datadoghq.com',
            service: 'dashboard-demo@pwx-2022',
            env: '',
            version: '1.0.0',
            sampleRate: 100,
            premiumSampleRate: 100,
            trackInteractions: true,
            defaultPrivacyLevel: 'mask-user-input',
        }
    },
    errorHandlingConfig: {
        applicationName: 'DashboardDemo',
        includeDefaultErrorHandling: true
    },
    loggingConfig: {
        applicationName: 'DashboardDemo',
        isProduction: false
    },
    webConfig: {
        applicationName: 'Dashboard Demo',
        blogURL: 'https://www.medium.com/@angularlicious',
        companyName: 'DashboardDemo',
        companyEffectiveDate: new Date(2020, 10, 1),
        email: 'dashboard@buildmotion.com',
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
        website: 'DashboardDemo',
        defaultPageSize: 25,
        googleTagManagerId: 'GTM-JHHJJH',
        keywordValidationInMilliseconds: 750,
        pageSizeOptions: [25, 50, 100],
        reloadDelayAfterNoticeInMinutes: 0,
        reloadDelayInMinutes: 1439,
        reloadNoticeDisplayInSeconds: 30,
    },
};