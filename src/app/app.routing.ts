import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Approutes } from './config/approutes';

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(Approutes)]
})
export class AppRoutingModule {}

