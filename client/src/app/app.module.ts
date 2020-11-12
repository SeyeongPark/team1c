import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListModule } from './survey-list/survey-list.module';

import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { AddComponent } from './pages/add/add.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LandingComponent,
    SurveyComponent,
    BasePageComponent,
    AddComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
