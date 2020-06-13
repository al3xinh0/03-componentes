import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../../components/components.module';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents: [
    ModalInfoPage
  ],
  imports: [RouterModule.forChild(routes), ComponentsModule, ModalInfoPageModule],
  exports: [RouterModule],
})
export class ModalPageRoutingModule {}
