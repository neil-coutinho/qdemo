import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsRoutingModule } from './forms-routing.module';
import { FormComponent } from './form.component';

import { JsonSchemaFormModule }  from 'angular4-json-schema-form';

import { QInputWidgetComponent } from './widgets/q-input-widget.component';

import { JsonSchemaFormService } from '../../../../../node_modules/angular4-json-schema-form/src/json-schema-form.service';

import { AbstractControl } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsRoutingModule,
    JsonSchemaFormModule,

  ],

  declarations: [FormComponent, QInputWidgetComponent],
  entryComponents: [QInputWidgetComponent]
})




export class FormsModule {
}
