import { Route, RouterModule, Routes } from '@angular/router';
import { coreRoutes } from './core/core.routes';

export const appRoutes: Routes = [
    ... coreRoutes,

    /**
     * Add extra components routes here.
     * You can get inspired how other components work, from 'core.routes.ts'
     * this route file has no extra logic
     * By default, we are using LayoutComponent which is a material
     * layout. Feel free to add your custom layout, if you are not corporating
     * with the contributors.
     */
];

export function appRoutesGenerator () {
    return RouterModule.forRoot(appRoutes);
}
