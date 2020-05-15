import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {NewsComponent} from '../app/news/news.component';
import {RosterComponent} from '../app/roster/roster.component';
import{AboutComponent} from '../app/about/about.component';
import {ServicesComponent} from '../app/services/services.component';
import {ContactComponent} from '../app/contact/contact.component';
import {AcademyComponent} from '../app/academy/academy.component'
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'news',
    component: NewsComponent,

  },
  {
    path: 'roster',
    component: RosterComponent,

  },
  {
    path: 'about',
    component: AboutComponent,

  },
  {
    path: 'services',
    component: ServicesComponent,

  },
  {
    path: 'contact',
    component: ContactComponent,

  },
  {
    path: 'academy',
    component: AcademyComponent,

  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
