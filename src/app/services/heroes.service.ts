// services/heroes.service.ts
import { Injectable } from '@angular/core';
import { Heroe } from '../class/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Heroe[] = [
    new Heroe('Batman', ' Protege Gotham City con su inteligencia y tecnología', 'assets/img/batman.jpg', '2021', 'DC'),
    new Heroe('Spiderman', 'Protege Nueva York ', 'assets/img/spiderman.jpg', '2020', 'Marvel')
  ];

  constructor() { }

  // Function to get all heroes
  getHeroes(): Heroe[] {
    return this.heroes;
  }

  // Function to get hero by index
  getHeroById(id: number): Heroe {
    return this.heroes[id];
  }
}