import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridPage } from './grid.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: GridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class GridPageRoutingModule {}
