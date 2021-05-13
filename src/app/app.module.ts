import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Metamask} from "../services/Metamask.service";
import {WalletService} from "../services/WalletService";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: WalletService, useClass: Metamask}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
