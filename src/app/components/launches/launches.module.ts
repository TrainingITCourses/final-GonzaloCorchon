import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LaunchesPageComponent } from './launches-page/launches-page.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ],
  declarations: [LaunchListComponent, LaunchesPageComponent]
})
export class LaunchesModule { }
