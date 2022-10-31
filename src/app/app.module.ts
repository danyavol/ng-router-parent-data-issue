import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1.component';
import { Test2Component } from './test2.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, Test1Component, Test2Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
