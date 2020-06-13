import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkeletonPageRoutingModule } from './skeleton-routing.module';

import { SkeletonPage } from './skeleton.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkeletonPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SkeletonPage]
})
export class SkeletonPageModule {}
