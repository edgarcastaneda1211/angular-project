import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body/body.component';
import { ContactsComponent } from './components/body/contacts/contacts.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { EjemploComponent } from './components/body/ejemplo/ejemplo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'heroes', component: BodyComponent }, // BodyComponent contains heroes list
  { path: 'heroe/:id', component: HeroDetailsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'ejemplo', component: EjemploComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  // Added { useHash: true }
  exports: [RouterModule]
})
export class AppRoutingModule { }