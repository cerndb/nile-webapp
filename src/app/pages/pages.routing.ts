/**
 * Created by adediosf on 17/02/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';

import { Dashboard } from './dashboard/dashboard.component';
import { ClusterTable} from './cluster/cluster-table/cluster-table.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'cluster', component: ClusterTable }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
