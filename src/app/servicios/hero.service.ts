// src/app/services/hero.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Heroe } from '../class/heroe';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService { // handles data operations of http calls and API
  // Try with an absolute URL

  private baseURL = '/api/heroes';
  
  // Fallback if API doesnt work! 
  private fallbackHeroes: Heroe[] = [
    new Heroe('Batman', 'Protege Gotham City con su inteligencia y tecnología', 'assets/img/batman.jpg', '2021', 'DC'),
    new Heroe('Spiderman', 'Protege Nueva York', 'assets/img/spiderman.jpg', '2020', 'Marvel')
  ];

  constructor(private http: HttpClient) { } // inject with http client for API

  // Get all heroes with better debugging
  getAllHeroes(): Observable<Heroe[]> { // getAllHeroes, expect that it will return an Observable of type Heroe array
    console.log('Fetching heroes from:', this.baseURL); 
  
    return this.http.get<Heroe[]>(this.baseURL) // Make HTTP GET request to fetch heroes
    .pipe( // needed, handles errors!!! Runs IFF Subscribed!! All the below. 
      tap(heroes => {
        console.log('Heroes fetched successfully:', heroes);
        console.log('Data type:', typeof heroes);
        console.log('Number of heroes:', heroes.length);
        console.log('Is using fallback?', false);
      }),
      catchError((error) => {
        console.error('Error fetching heroes:', error);
        
        // In development mode, use fallback data
        console.log('Using fallback heroes data instead');
        console.log('Is using fallback?', true);
        console.log('Number of fallback heroes:', this.fallbackHeroes.length);
        return of(this.fallbackHeroes);
      })
    );
  }

  // Save a hero
  saveHeroAPI(hero: Heroe): Observable<Heroe> { // hero is data being saved, Heroe is type .... Also, in observable, only saving one hero not an array of heroes 
    console.log('Saving hero:', hero);
    
    return this.http.post<Heroe>(this.baseURL, hero).pipe( //Makes HTTP POST to save hero data to database via API
      tap(savedHero => {
        console.log(' Hero saved successfully:', savedHero);
      }),
      catchError(error => {
        console.error('Error saving hero:', error);
        return throwError(error);  // Let component handle the error
      })
    );
  }

  // Update an existing hero
  updateHero(id: number, heroData: any): Observable<Heroe> {
    console.log('Updating hero with ID:', id, heroData);

    // PUT request that sends updated data to /api/heroes/{id}
    return this.http.put<Heroe>(`${this.baseURL}/${id}`, heroData).pipe(
      tap(updatedHero => {
        console.log('Hero updated successfully:', updatedHero);
      }),
      catchError(error => {
        console.error('Error updating hero:', error);
        return throwError(error);
      })
    );
  }

  // Delete a hero by ID ... communicates w backend / db
  deleteHero(id: number): Observable<any> {
    console.log('Deleting hero with ID:', id);
    
    return this.http.delete(`${this.baseURL}/${id}`).pipe(
      tap(() => {
        console.log(' Hero deleted successfully');
      }),
      catchError(error => {
        console.error('Error deleting hero:', error);
        return throwError(error);
      })
    );
  }
}