import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerComponent } from './view-container/view-container.component';
import { EducationRoutingModule } from './education.routing';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import  { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    EducationRoutingModule,
    CardModule,
    MenuModule,
    InputTextareaModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  declarations: [ViewContainerComponent]
})
export class EducationModule { }
