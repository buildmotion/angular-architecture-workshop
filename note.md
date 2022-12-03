# Dev Notes

git switch setup/new-nx-workspace
git switch new-angular-application/create-application
git switch new-angular-application/template-setup
git switch accounts/ui-feature-library
git switch accounts/new-account-component
git switch accounts/new-account-ui-service
git switch accounts/new-domain-service-library

nx generate @buildmotion/angular:domain-service service --directory=dashboard/accounts --importPath=@buildmotion/dashboard-accounts-service --npmScope=buildmotion --simpleModuleName --standaloneConfig --no-interactive --dry-run

>  NX  Generating @buildmotion/angular:domain-service

[NX] Angular devkit called `writeWorkspace`, this may have created 'workspace.json' or 'angular.json
[NX] Double check workspace configuration before proceeding
Skipping dashboard-accounts-service since libs/dashboard/accounts/service/project.json already exists.
CREATE libs/dashboard/accounts/service/README.md
CREATE libs/dashboard/accounts/service/tsconfig.lib.json
CREATE libs/dashboard/accounts/service/tsconfig.spec.json
CREATE libs/dashboard/accounts/service/src/index.ts
CREATE libs/dashboard/accounts/service/project.json
CREATE libs/dashboard/accounts/service/tsconfig.json
CREATE libs/dashboard/accounts/service/src/lib/service.module.ts
UPDATE tsconfig.base.json
CREATE libs/dashboard/accounts/service/jest.config.ts
CREATE libs/dashboard/accounts/service/src/test-setup.ts
CREATE libs/dashboard/accounts/service/.eslintrc.json
CREATE libs/dashboard/accounts/service/src/lib/service.service.spec.ts
CREATE libs/dashboard/accounts/service/src/lib/service.service.ts
CREATE libs/dashboard/accounts/service/src/lib/business/actions/business-action-base.ts
CREATE libs/dashboard/accounts/service/src/lib/business/business-provider.service.spec.ts
CREATE libs/dashboard/accounts/service/src/lib/business/business-provider.service.ts
CREATE libs/dashboard/accounts/service/src/lib/business/http-service-repository.service.spec.ts
CREATE libs/dashboard/accounts/service/src/lib/business/http-service-repository.service.ts
CREATE libs/dashboard/accounts/service/src/lib/business/i-business-provider.service.ts
CREATE libs/dashboard/accounts/service/src/lib/business/i-http-service-repository.service.ts

NOTE: The "dryRun" flag means no changes were made.

git switch main