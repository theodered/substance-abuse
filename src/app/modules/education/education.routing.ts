import { Routes, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../education/view-container/view-container.component";
import { NgModule } from "@angular/core";

const educationRoutes: Routes = [
    { path: '', component: ViewContainerComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(educationRoutes)]
})
export class EducationRoutingModule {

}