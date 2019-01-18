import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { landingPageRouteModule } from './landing-page.routing';

@NgModule({
  imports: [
    CommonModule,
    landingPageRouteModule,
  ],
  declarations: [LandingPageComponent]
})
export class LandingPageModule { }
