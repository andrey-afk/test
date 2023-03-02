import {NgModule} from '@angular/core';

import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SharedModule} from "../shared/shared.module";
import {ComponentsRoutingModule} from "./components-routing.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class ComponentsModule {
}
