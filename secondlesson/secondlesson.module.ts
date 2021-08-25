import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondlessonPageRoutingModule } from './secondlesson-routing.module';

import { SecondlessonPage } from './secondlesson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondlessonPageRoutingModule
  ],
  declarations: [SecondlessonPage]
})
export class SecondlessonPageModule {}
