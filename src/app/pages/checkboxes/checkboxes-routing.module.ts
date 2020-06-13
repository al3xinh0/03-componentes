import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckboxesPage } from './checkboxes.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: CheckboxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class CheckboxesPageRoutingModule {}
