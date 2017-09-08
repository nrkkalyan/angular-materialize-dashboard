import { Route, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/core/services/user.service';
import { LoginComponent } from '@app/core/components/login/login.component';
import { SignupComponent } from '@app/core/components/signup/signup.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MainComponent } from './components/layout/main/main.component';
import { IndexComponent } from './components/index/index.component';

export const coreRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: LayoutComponent,
        data: {
            breadcrumb: [
                'index'
            ]
        },
        children: [
            {
                path: '',
                component: IndexComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            redirect: '/index'
        }
    },
    {
        path: 'signup',
        component: SignupComponent
    }
];
