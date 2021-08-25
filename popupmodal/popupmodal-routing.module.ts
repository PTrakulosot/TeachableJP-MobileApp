import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopupmodalPage } from './popupmodal.page';

const routes: Routes = [
  {
    path: '',
    component: PopupmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopupmodalPageRoutingModule {}
