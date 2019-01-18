import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { StoryTwoRoutingModule } from './stories.routing';
import { CardModule } from 'primeng/card';

@NgModule({
  imports: [
    CommonModule, StoryTwoRoutingModule, CardModule,

  ],
  declarations: [ViewContainerComponent]
})
export class StoriesTwoModule { }
