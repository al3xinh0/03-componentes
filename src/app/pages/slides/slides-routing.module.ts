import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesPage } from './slides.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: SlidesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class SlidesPageRoutingModule {}
