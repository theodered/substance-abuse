import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { StoryOneRoutingModule } from './stories.routing';
import {MDBBootstrapModule} from "angular-bootstrap-md";

@NgModule({
  imports: [
    CommonModule, StoryOneRoutingModule,MDBBootstrapModule
  ],
  declarations: [ViewContainerComponent]
})
export class StoriesOneModule { }
