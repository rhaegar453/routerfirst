import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponentComponent } from '../Components/user-component/user-component.component';
import { UserDashboardComponent } from '../Components/user-dashboard/user-dashboard.component';
import { UserManagementComponent } from '../Components/user-management/user-management.component';
import { UserComplianceComponent } from '../Components/user-compliance/user-compliance.component';

@NgModule({
  declarations: [UserComponentComponent, UserDashboardComponent, UserManagementComponent, UserComplianceComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
