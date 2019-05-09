import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponentComponent } from '../Components/user-component/user-component.component';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { UserManagementComponent } from '../Components/user-management/user-management.component';
import { UserComplianceComponent } from '../Components/user-compliance/user-compliance.component';


const routes: Routes = [
  // {path:'', component:UserComponentComponent},
  { path: '', component: UserComponentComponent },
  {path:'dashboard', component:UserDashboardComponent},
  {path:'management', component:UserManagementComponent},
  {path:'compliance', component:UserComplianceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
