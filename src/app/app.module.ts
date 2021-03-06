import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UploadComponent } from './upload/upload.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { DataProcessComponent } from './data-process/data-process.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UploadComponent,
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
