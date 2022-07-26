import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationComponent } from './verification.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: VerificationComponent
  }
];

@NgModule({
  declarations: [VerificationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class VerificationModule { }
