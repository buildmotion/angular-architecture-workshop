import { Routes } from '@angular/router';

import { AdminLayoutComponent } from '@buildmotion/layouts';
import { AuthLayoutComponent } from '@buildmotion/layouts';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: '',
                loadChildren: () =>
                    import('./userpage/user.module').then((m) => m.UserModule),
            },

        ],
    },
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'pages',
                loadChildren: () =>
                    import('./pages/pages.module').then((m) => m.PagesModule),
            },
        ],
    },
];
