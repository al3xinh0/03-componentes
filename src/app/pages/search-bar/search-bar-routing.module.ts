import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBarPage } from './search-bar.page';
import { PipesModule } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: SearchBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), PipesModule],
  exports: [RouterModule],
})
export class SearchBarPageRoutingModule {}
