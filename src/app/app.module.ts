import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { PodiumComponent } from './podium/podium.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultTableComponent,
    PodiumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
