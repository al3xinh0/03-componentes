import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkeletonPage } from './skeleton.page';
import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: SkeletonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule, PipesModule],
  exports: [RouterModule],
})
export class SkeletonPageRoutingModule {}
