/**
 * Created by adediosf on 17/02/17.
 */
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClusterComponent } from './cluster/cluster.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cluster', component: ClusterComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
