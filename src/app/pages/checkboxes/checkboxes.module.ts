import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxesPageRoutingModule } from './checkboxes-routing.module';

import { CheckboxesPage } from './checkboxes.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckboxesPage]
})
export class CheckboxesPageModule {}
