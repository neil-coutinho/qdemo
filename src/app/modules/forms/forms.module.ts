import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form.component';

import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";

import { DynamicFormsNGBootstrapUIModule } from "@ng-dynamic-forms/ui-ng-bootstrap";






@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,

    DynamicFormsCoreModule.forRoot(),

    DynamicFormsNGBootstrapUIModule,

    ReactiveFormsModule

  ],
  declarations: [FormComponent]
})




export class FormsModule { }
