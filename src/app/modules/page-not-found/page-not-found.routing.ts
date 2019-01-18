import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ViewContainerComponent } from "../page-not-found/view-container/view-container.component";

const pageNotFoundRoute: Routes = [
    {path: '', component: ViewContainerComponent}
]

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forChild(pageNotFoundRoute)]
})
export class pageNotFoundRouting {}