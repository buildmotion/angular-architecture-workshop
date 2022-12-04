# Dev Notes

git switch setup/new-nx-workspace
git switch new-angular-application/create-application
git switch new-angular-application/template-setup
git switch accounts/ui-feature-library
git switch accounts/new-account-component
git switch accounts/new-account-ui-service
git switch accounts/new-domain-service-library
git switch accounts/domain-service-integration

nx generate @buildmotion/angular:business-action createNewAccount --directory=dashboard/accounts/service --npm-scope=buildmotion --no-interactive --dry-run

git switch main