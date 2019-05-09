import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadonlyRoutingModule } from './readonly-routing.module';
import { ReadOnlyComponentComponent } from '../Components/read-only-component/read-only-component.component';

@NgModule({
  declarations: [ReadOnlyComponentComponent],
  imports: [
    CommonModule,
    ReadonlyRoutingModule
  ]
})
export class ReadonlyModule { }
