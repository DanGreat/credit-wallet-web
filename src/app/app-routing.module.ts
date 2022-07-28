import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./pages/loan-disbursement/loan-disbursement.module').then(m => m.LoanDisbursementModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./pages/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'incomplete-actions',
    loadChildren: () => import('./pages/incomplete-actions/incomplete-actions.module').then(m => m.IncompleteActionsModule)
  },
  {
    path: 'awaiting-disbursement',
    loadChildren: () => import('./pages/awaiting-disbursement/awaiting-disbursement.module').then(m => m.AwaitingDisbursementModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
