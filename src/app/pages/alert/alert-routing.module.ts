import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertPage } from './alert.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class AlertPageRoutingModule {}
