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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
