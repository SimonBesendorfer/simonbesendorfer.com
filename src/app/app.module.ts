import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { LatestProjectComponent } from './latest-project/latest-project.component';
import { RingOfFireComponent } from './ring-of-fire/ring-of-fire.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImpBotComponent } from './imp-bot/imp-bot.component';
import { ElpollolocoComponent } from './elpolloloco/elpolloloco.component';
import { JoinComponent } from './join/join.component';
import { AboutComponent } from './about/about.component';
import { PrivateComponent } from './private/private.component';
import { RingoffireDetailComponent } from './ring-of-fire/ringoffire-detail/ringoffire-detail.component';
import { ImpbotDetailComponent } from './imp-bot/impbot-detail/impbot-detail.component';
import { ElpollolocoDetailComponent } from './elpolloloco/elpolloloco-detail/elpolloloco-detail.component';
import { JoinDetailComponent } from './join/join-detail/join-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    WelcomeComponent,
    FooterComponent,
    ContactFooterComponent,
    LatestProjectComponent,
    RingOfFireComponent,
    ImprintComponent,
    ContactComponent,
    ProjectsComponent,
    ImpBotComponent,
    ElpollolocoComponent,
    JoinComponent,
    AboutComponent,
    PrivateComponent,
    RingoffireDetailComponent,
    ImpbotDetailComponent,
    ElpollolocoDetailComponent,
    JoinDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
