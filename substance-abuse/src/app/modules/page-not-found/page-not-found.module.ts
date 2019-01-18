import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { pageNotFoundRouting } from './page-not-found.routing';

@NgModule({
  imports: [
    CommonModule, 
    pageNotFoundRouting
  ],
  declarations: [ViewContainerComponent]
})
export class PageNotFoundModule { }
