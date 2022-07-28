import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoveryComponent } from './recovery.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RecoveryComponent
  }
];

@NgModule({
  declarations: [RecoveryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class RecoveryModule { }
