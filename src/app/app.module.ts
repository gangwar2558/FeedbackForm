import { FeedbackFormComponent } from './feedbackform/feedbackform.component';
import { HttpModule }       from '@angular/http';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent ,FeedbackFormComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
