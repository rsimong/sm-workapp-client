import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule) },
  { path: 'a', loadChildren: () => import('./layouts/account/account.module').then(m => m.AccountModule) },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
