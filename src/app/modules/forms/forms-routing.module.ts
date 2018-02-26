import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';



const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    data: {
      title: 'Schema form',
      icon: 'icon-layout-cta-right',
      caption: 'variants color of nav bar',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class FormsRoutingModule { }
