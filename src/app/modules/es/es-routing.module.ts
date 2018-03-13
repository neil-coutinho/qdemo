import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EsComponent } from './es.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: EsComponent,
    canActivate: [ AuthGuard ],
    data: {
      title: 'Elastic Search Datatables',
      icon: 'icon-layout-cta-right',
      caption: '',
      status: true
    }
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EsRoutingModule { }
