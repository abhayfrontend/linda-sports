import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {NewsComponent} from '../app/news/news.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,

  },
  {
    path: 'news',
    component: NewsComponent,

  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
