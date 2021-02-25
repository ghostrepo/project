import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { DataProcessComponent } from './data-process/data-process.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FloorPlanComponent,
    ZipCodeComponent,
    DataProcessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
