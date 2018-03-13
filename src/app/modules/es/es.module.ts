import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../../shared/shared.module';

import { EsRoutingModule } from './es-routing.module';
import { EsComponent } from './es.component';
import { EsService } from './es.service';

import { AuthGuard } from '../../guards/auth.guard';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxDatatableModule,
    EsRoutingModule
  ],
  declarations: [EsComponent],
  providers: [EsService, AuthGuard]
})
export class EsModule { }
