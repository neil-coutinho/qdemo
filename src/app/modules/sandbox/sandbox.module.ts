import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonSchemaFormModule }  from 'angular4-json-schema-form';

import { SandboxRoutingModule } from './sandbox-routing.module';
import { SandboxComponent } from './sandbox.component';

@NgModule({
  imports: [
    CommonModule,
    SandboxRoutingModule,
    JsonSchemaFormModule
  ],
  declarations: [SandboxComponent]
})
export class SandboxModule { }
