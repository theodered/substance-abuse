import { Routes, Router, RouterModule } from "@angular/router";
import { ViewContainerComponent } from "../rehab/view-container/view-container.component";
import { NgModule } from "@angular/core";

const rehadRouting: Routes = [
    { path: 'main', component: ViewContainerComponent}
]

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(rehadRouting)]
})
export class rehadRoutingModule {
    
}