import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './Components/home/home.component';
import {PagenotfoundComponent} from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'user', loadChildren:'./user/user-routing.module#UserRoutingModule'},
  {path:'admin', loadChildren:'./admin/admin-routing.module#AdminRoutingModule'},
  {path:'readonly', loadChildren:'./readonly/readonly-routing.module#ReadonlyRoutingModule'},
  {path:'compliance', loadChildren:'./compliance/compliance-routing.module#ComplianceRoutingModule'},
  {path:'**', component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
