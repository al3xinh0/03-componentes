import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatetimePageRoutingModule } from './datetime-routing.module';

import { DatetimePage } from './datetime.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DatetimePage]
})
export class DatetimePageModule {}
