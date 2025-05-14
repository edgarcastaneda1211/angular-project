import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../class/heroe';
import { HeroesService } from '../../../services/heroes.service'; // Add this import

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = []; // Just an empty array initially
  
  // Just have ONE service injected - in the constructor - !!!! Gives access to all methods!!!!
  constructor(private heroesService: HeroesService) { }
  
  ngOnInit(): void {
    // Get data from service
    this.heroes = this.heroesService.getHeroes();
  }
}