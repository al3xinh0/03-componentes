import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsPage } from './cards.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
