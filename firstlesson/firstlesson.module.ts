import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstlessonPageRoutingModule } from './firstlesson-routing.module';

import { FirstlessonPage } from './firstlesson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstlessonPageRoutingModule
  ],
  declarations: [FirstlessonPage]
})
export class FirstlessonPageModule {}
