import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopupmodalPageRoutingModule } from './popupmodal-routing.module';

import { PopupmodalPage } from './popupmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopupmodalPageRoutingModule
  ],
  declarations: [PopupmodalPage]
})
export class PopupmodalPageModule {}
