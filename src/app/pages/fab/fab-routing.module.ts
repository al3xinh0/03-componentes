import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FabPage } from './fab.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: FabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class FabPageRoutingModule {}
