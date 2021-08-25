import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmemoPageRoutingModule } from './addmemo-routing.module';

import { AddmemoPage } from './addmemo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmemoPageRoutingModule
  ],
  declarations: [AddmemoPage]
})
export class AddmemoPageModule {}
