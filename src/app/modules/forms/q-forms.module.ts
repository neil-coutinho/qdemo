import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QFormsRoutingModule } from './q-forms-routing.module';
import { QFormComponent } from './q-form.component';

import { JsonSchemaFormModule }  from 'angular4-json-schema-form';
import { JsonSchemaFormService }  from 'angular4-json-schema-form';




import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QInputWidgetComponent } from './widgets/q-input-widget.component';

@NgModule({
  imports: [
    CommonModule,
    QFormsRoutingModule,
    JsonSchemaFormModule,
    FormsModule,
    ReactiveFormsModule

],
providers: [JsonSchemaFormService],
  declarations: [QFormComponent,QInputWidgetComponent],
  entryComponents: [QInputWidgetComponent]
})




export class QFormsModule {
}
