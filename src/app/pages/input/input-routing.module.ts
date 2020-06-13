import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPage } from './input.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: InputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class InputPageRoutingModule {}
