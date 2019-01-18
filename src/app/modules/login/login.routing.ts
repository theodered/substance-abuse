import { Routes, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../login/view-container/view-container.component";
import { NgModule } from "@angular/core";

const loginRoutes: Routes = [
    { path: 'main', component: ViewContainerComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(loginRoutes)]
})
export class LoginRoutingModule {

}