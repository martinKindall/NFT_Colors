import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Metamask} from "../services/Metamask.service";
import {WalletService} from "../services/WalletService";
import {ColorsFactory} from "../services/ColorsFactory.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: WalletService, useClass: Metamask},
    {provide: ColorsFactory}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
