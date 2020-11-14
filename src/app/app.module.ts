import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { NewComponent } from './components/new/new.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
	AppComponent,
	HeaderComponent,
	AboutComponent,
	NewComponent,
	FeaturedComponent,
	FooterComponent
  ],
  imports: [
	BrowserModule,
	NgbModule,
	FontAwesomeModule,
	BrowserAnimationsModule,
	CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
