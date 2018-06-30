import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InstafeedComponent } from './instafeed/instafeed.component';
import { IgService } from './ig.service';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { IgBioComponent } from './ig-bio/ig-bio.component';
import { FooterComponent } from './footer/footer.component';
import { GigsComponent } from './gigs/gigs.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { MailService } from './mail.service';

@NgModule({
  declarations: [
    AppComponent,
    InstafeedComponent,
    NavbarComponent,
    CarouselComponent,
    IgBioComponent,
    FooterComponent,
    GigsComponent,
    AboutComponent,
    ContactComponent,
    MusicComponent,
    VideosComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [IgService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
