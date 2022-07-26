import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanDisbursementComponent } from './loan-disbursement.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoanDisbursementComponent
  }
];

@NgModule({
  declarations: [LoanDisbursementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class LoanDisbursementModule { }
