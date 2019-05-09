import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponentComponent} from '../Components/user-component/user-component.component';


const routes: Routes = [
  // {path:'', component:UserComponentComponent}
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:UserComponentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
