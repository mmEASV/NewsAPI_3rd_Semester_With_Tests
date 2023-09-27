import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleDisplayComponent } from './article-display/article-display.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DataViewModule} from "primeng/dataview";
import {MenuComponent} from "./menu/menu.component";
import {ArticleDisplayModule} from "./article-display/article-display.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ArticleDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataViewModule,
    HttpClientModule,
    ArticleDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
