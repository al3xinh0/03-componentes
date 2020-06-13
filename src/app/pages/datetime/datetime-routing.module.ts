import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatetimePage } from './datetime.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: DatetimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class DatetimePageRoutingModule {}
