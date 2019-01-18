import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { ChatRoutingModule } from './chat.routing';

@NgModule({
  imports: [
    CommonModule,
    ChatRoutingModule
  ],
  declarations: [ViewContainerComponent]
})
export class ChatModule { }
