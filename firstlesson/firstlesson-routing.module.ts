import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstlessonPage } from './firstlesson.page';

const routes: Routes = [
  {
    path: '',
    component: FirstlessonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstlessonPageRoutingModule {}
