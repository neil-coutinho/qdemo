import { NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';


import { QFormsRoutingModule } from './q-forms-routing.module';
import { QFormComponent } from './q-form.component';

import { JsonSchemaFormModule }  from 'angular2-json-schema-form';
import { JsonSchemaFormService }  from 'angular2-json-schema-form';
import { Bootstrap4FrameworkModule }  from 'angular2-json-schema-form';
import { WidgetLibraryService } from 'angular2-json-schema-form';
import { FrameworkLibraryService } from 'angular2-json-schema-form';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QInputWidgetComponent } from './widgets/q-input-widget.component';
import { QMultiSelectWidgetComponent } from './widgets/q-multi-select-widget.component';
import { QDataTableWidgetComponent } from './widgets/q-dataTable-widget.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SelectModule } from 'ng-select';
@NgModule({
  imports: [
    CommonModule,
    QFormsRoutingModule,
    Bootstrap4FrameworkModule,
    JsonSchemaFormModule.forRoot(Bootstrap4FrameworkModule),
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    NgxDatatableModule

],
providers: [JsonSchemaFormService],
  declarations: [QFormComponent,QInputWidgetComponent, QMultiSelectWidgetComponent, QDataTableWidgetComponent],
  entryComponents: [QInputWidgetComponent, QMultiSelectWidgetComponent, QDataTableWidgetComponent]
})




export class QFormsModule {
}
