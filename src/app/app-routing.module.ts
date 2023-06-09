import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { AuthGuard } from './_helpers/auth.guard';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'app', component: AppLayoutComponent,
                children: [
                    { 
                        path: 'index', 
                        loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'dashboard', 
                        loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'uikit', 
                        loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'utilities', 
                        loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'documentation', 
                        loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'blocks', 
                        loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule),
                        canActivate: [AuthGuard]
                    },
                    { 
                        path: 'pages', 
                        loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule),
                        canActivate: [AuthGuard] 
                    }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: '', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
