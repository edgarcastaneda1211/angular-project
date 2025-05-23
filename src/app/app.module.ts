import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroeComponent } from './components/body/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';
import { ContactsComponent } from './components/body/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { EjemploComponent } from './components/body/ejemplo/ejemplo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EditHeroComponent } from './components/body/edit-hero/edit-hero.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HeroeComponent,
    HomeComponent,
    HeroDetailsComponent,
    ContactsComponent,
    EjemploComponent,
    FormularioComponent,
    EditHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    HttpClientModule,
    CommonModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }