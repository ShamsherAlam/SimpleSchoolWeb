import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AcademicsComponent } from './academics/academics.component';
import { FacultynstaffComponent } from './facultynstaff/facultynstaff.component';
import { NewsComponent } from './news/news.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    AcademicsComponent,
    FacultynstaffComponent,
    NewsComponent,
    ContactusComponent,
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
