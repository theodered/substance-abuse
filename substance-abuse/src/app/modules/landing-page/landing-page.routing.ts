import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page.component";
import { NgModule } from "@angular/core";

const landingPageRoute: Routes = [
    {path: '', component: LandingPageComponent}
]

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(landingPageRoute)]
})
export class landingPageRouteModule {}