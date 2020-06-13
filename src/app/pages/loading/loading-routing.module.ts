import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingPage } from './loading.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: LoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class LoadingPageRoutingModule {}
