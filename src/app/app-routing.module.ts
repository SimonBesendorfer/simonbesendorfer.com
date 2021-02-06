import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ElpollolocoDetailComponent } from './elpolloloco/elpolloloco-detail/elpolloloco-detail.component';
import { ImpbotDetailComponent } from './imp-bot/impbot-detail/impbot-detail.component';
import { ImprintComponent } from './imprint/imprint.component';
import { JoinDetailComponent } from './join/join-detail/join-detail.component';
import { LandingComponent } from './landing/landing.component';
import { PrivateComponent } from './private/private.component';
import { ProjectsComponent } from './projects/projects.component';
import { RingoffireDetailComponent } from './ring-of-fire/ringoffire-detail/ringoffire-detail.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'imprint', component: ImprintComponent },  
  { path: 'contact', component: ContactComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'private', component: PrivateComponent },

  { path: 'ringoffireapp', component: RingoffireDetailComponent },
  { path: 'impbotapp', component: ImpbotDetailComponent },
  { path: 'elpollolocoapp', component: ElpollolocoDetailComponent },
  { path: 'joinapp', component: JoinDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
