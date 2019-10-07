import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {displayOneComponent} from './display1.component';
import {displayItemListComponent} from './display-item-list.component'
@NgModule({
  declarations: [
    AppComponent,
    displayOneComponent,
    displayItemListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
