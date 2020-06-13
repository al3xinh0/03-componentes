import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverMainPage } from './popover-main.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverComponent } from '../../components/popover/popover.component';

const routes: Routes = [
  {
    path: '',
    component: PopoverMainPage
  }
];

@NgModule({
  entryComponents: [PopoverComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class PopoverMainPageRoutingModule {}
