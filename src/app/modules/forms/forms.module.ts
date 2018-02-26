import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form.component';

import { JsonSchemaFormModule }  from 'angular4-json-schema-form';





@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    JsonSchemaFormModule,




  ],
  declarations: [FormComponent]
})




export class FormsModule {
}
