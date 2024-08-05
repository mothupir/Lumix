import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./dashboard/dashboard.component').then(c => {
            return c.DashboardComponent
        })
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
