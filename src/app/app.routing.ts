/**
 * Created by adediosf on 17/02/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }

];

/*Like creating the NgModule with the providers */
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
