import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: 'launches/:id',
    loadChildren: './components/launches/launches.module#LaunchesModule'
  },
  {
    path: 'launch/:id',
    loadChildren: './components/launch/launch.module#LaunchModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
