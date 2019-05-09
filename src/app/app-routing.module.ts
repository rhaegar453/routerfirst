import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './Components/home/home.component';
import {PagenotfoundComponent} from './Components/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'user', loadChildren:'./user/user.module#UserModule'},
  {path:'admin', loadChildren:'./admin/admin.module#AdminModule'},
  {path:'readonly', loadChildren:'./readonly/readonly.module#ReadonlyModule'},
  {path:'compliance', loadChildren:'./compliance/compliance.module#ComplianceModule'},
  {path:'**', component:PagenotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
