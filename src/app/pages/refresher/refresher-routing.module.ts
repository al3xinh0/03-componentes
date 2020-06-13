import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefresherPage } from './refresher.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RefresherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class RefresherPageRoutingModule {}
