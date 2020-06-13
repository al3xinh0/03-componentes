import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressBarPage } from './progress-bar.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class ProgressBarPageRoutingModule {}
