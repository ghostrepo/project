import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { DataProcessComponent } from './data-process/data-process.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FloorPlanComponent,
    ZipCodeComponent,
    DataProcessComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
