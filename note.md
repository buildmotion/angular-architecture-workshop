# Dev Notes

git switch setup/new-nx-workspace
git switch new-angular-application/create-application
git switch new-angular-application/template-setup
git switch accounts/ui-feature-library
git switch accounts/new-account-component

nx g @nrwl/angular:module --name=new-account      --project=dashboard-accounts-ui --module=ui.module --routing --route=new-account -d
nx g @nrwl/angular:module --name=verify-account   --project=dashboard-accounts-ui --module=ui.module --routing --route=verify-account 
nx g @nrwl/angular:module --name=login            --project=dashboard-accounts-ui --module=ui.module --routing --route=login
nx g @nrwl/angular:module --name=logout           --project=dashboard-accounts-ui --module=ui.module --routing --route=logout
nx g @nrwl/angular:module --name=change-password  --project=dashboard-accounts-ui --module=ui.module --routing --route=change-password
nx g @nrwl/angular:module --name=forgot-password  --project=dashboard-accounts-ui --module=ui.module --routing --route=forgot-password

git switch main