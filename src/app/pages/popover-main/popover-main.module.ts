import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopoverMainPageRoutingModule } from './popover-main-routing.module';

import { PopoverMainPage } from './popover-main.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopoverMainPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PopoverMainPage]
})
export class PopoverMainPageModule {}
