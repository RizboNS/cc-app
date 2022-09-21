import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { ParagraphComponent } from './component/paragraph/paragraph.component';
import { QuilTestComponent } from './components/quil-test/quil-test.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Test2Component, ParagraphComponent, QuilTestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
