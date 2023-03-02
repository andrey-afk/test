import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
