import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { rehadRoutingModule } from './rehab.routing';

@NgModule({
  imports: [
    CommonModule,
    rehadRoutingModule
  ],
  declarations: [ViewContainerComponent]
})
export class RehabModule { }
