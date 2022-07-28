import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwaitingDisbursementComponent } from './awaiting-disbursement.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AwaitingDisbursementComponent
  }
];

@NgModule({
  declarations: [AwaitingDisbursementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AwaitingDisbursementModule { }
