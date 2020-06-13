import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListReorderPage } from './list-reorder.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ListReorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class ListReorderPageRoutingModule {}
