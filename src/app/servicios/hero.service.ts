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
private apiUrl = '/api/heroes';
  
  // Fallback if API doesnt work! 
  private fallbackHeroes: Heroe[] = [
    new Heroe('Batman', 'Protege Gotham City con su inteligencia y tecnología', 'assets/img/batman.jpg', '2021', 'DC'),
    new Heroe('Spiderman', 'Protege Nueva York', 'assets/img/spiderman.jpg', '2020', 'Marvel')
  ];

  constructor(private http: HttpClient) { } // inject with http client for API

  // Get all heroes with better debugging
  getAllHeroes(): Observable<Heroe[]> { // getAllHeroes, expect that it will return an Observable of type Heroe array
    console.log('Fetching heroes from:', this.apiUrl); 
  
  return this.http.get<Heroe[]>(this.apiUrl) // Make HTTP GET request to fetch heroes
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

// Register a hero? 


}