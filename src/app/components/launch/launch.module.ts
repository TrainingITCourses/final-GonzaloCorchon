import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchViewComponent } from './launch-view/launch-view.component';
import { LaunchPageComponent } from './launch-page/launch-page.component';

@NgModule({
  imports: [
    CommonModule,
    LaunchRoutingModule
  ],
  declarations: [LaunchPageComponent, LaunchViewComponent ]
})
export class LaunchModule { }
