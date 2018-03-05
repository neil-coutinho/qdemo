import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaFormModule }  from 'angular4-json-schema-form';


@NgModule({
  imports: [
    CommonModule,
    JsonSchemaFormModule
],declarations: [],

})




export class QWidgetsModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: QWidgetsModule,
            
        };
    }
}
