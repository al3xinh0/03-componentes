import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvatarPage } from './avatar.page';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: AvatarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class AvatarPageRoutingModule {}
