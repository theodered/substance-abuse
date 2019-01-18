import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [ViewContainerComponent]
})
export class LoginModule { }
