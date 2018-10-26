import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaunchesPageComponent } from './launches-page/launches-page.component';

const routes: Routes = [{
  path: '',
  component: LaunchesPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaunchesRoutingModule { }
