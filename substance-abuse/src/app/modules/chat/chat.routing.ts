import { Routes, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../chat/view-container/view-container.component";
import { NgModule } from "@angular/core";

const chatRoutes: Routes = [
    { path: 'main', component: ViewContainerComponent }
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(chatRoutes)]
})
export class ChatRoutingModule {

}