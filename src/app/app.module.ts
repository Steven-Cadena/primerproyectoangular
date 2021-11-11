import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } 
from 'src/components/primercomponent/primercomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
