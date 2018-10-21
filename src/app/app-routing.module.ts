import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},
  {path: 'home',loadChildren: './home/home.module#HomePageModule'},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'explore', loadChildren: './explore/explore.module#ExplorePageModule' },
  { path: 'help', loadChildren: './help/help.module#HelpPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'environmental', loadChildren: './environmental/environmental.module#EnvironmentalPageModule' },
  { path: 'health', loadChildren: './health/health.module#HealthPageModule' },
  { path: 'other', loadChildren: './other/other.module#OtherPageModule' },
  { path: 'natural', loadChildren: './natural/natural.module#NaturalPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
