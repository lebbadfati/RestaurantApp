import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemListModule } from './item-list/item-list.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';
import { FormsModule } from "@angular/forms";
import { FormAddPlatComponent } from '../form-add-plat/form-add-plat.component';


@NgModule({
  declarations: [
    AppComponent,
    FormAddPlatComponent
  ],
  imports: [
    BrowserModule,ItemListModule,HttpClientModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
