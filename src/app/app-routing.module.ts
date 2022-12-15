import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./sections/home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'curriculum',
    loadChildren: () => import('./sections/curriculum/curriculum.module').then(x => x.CurriculumModule)
  },
  {
    path: 'contact-me',
    loadChildren: () => import('./sections/contact-me/contact-me.module').then(x => x.ContactMeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
