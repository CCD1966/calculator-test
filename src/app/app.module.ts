import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SumComponent } from './sum/sum.component';
import { SubtractComponent } from './subtract/subtract.component';

@NgModule({
  declarations: [
    AppComponent,
    SumComponent,
    SubtractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
