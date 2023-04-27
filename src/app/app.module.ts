import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BtnComponent } from './components/btn/btn.component';
import { GapComponent } from './components/gap/gap.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturedImagesComponent } from './components/featured-images/featured-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BtnComponent,
    GapComponent,
    NavComponent,
    MainComponent,
    AboutComponent,
    FeaturedComponent,
    FeaturedImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
