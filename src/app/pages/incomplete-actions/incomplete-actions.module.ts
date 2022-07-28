import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncompleteActionsComponent } from './incomplete-actions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: IncompleteActionsComponent
  }
];

@NgModule({
  declarations: [IncompleteActionsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})

export class IncompleteActionsModule { }
