// heroe.component.ts
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../class/heroe';
import { HeroService } from '../../../servicios/hero.service';
import { ComponentTrackerService } from '../../../servicios/component-tracker.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  loading = false;
  error = '';

  // Constructor: "Here's your phone book with all the service numbers"
  // You HAVE the numbers, but your phone isn't activated yet
  constructor(private heroService: HeroService, private tracker: ComponentTrackerService) { }

  // ngOnInit: "Phone is now activated and connected to cell towers!"
  // NOW you can actually make calls and they'll work properly
  ngOnInit(): void {
    this.loadHeroes();
    this.tracker.announceComponent('Heroes');
  }

  // Load heroes from API
  private loadHeroes(): void {
    this.loading = true;
    this.error = '';

    this.heroService.getAllHeroes().subscribe({
      next: (data: Heroe[]) => {
        this.heroes = data;
        this.loading = false;
      },
      error: (err) => {
        this.handleError(err);
      }
    });
  }

  // Handle errors
  private handleError(err: any): void {
    this.error = 'Failed to load heroes';
    this.loading = false;
    console.error('Error in component:', err);
  }

  // Delete hero and update UI
  onDeleteHero(heroId: number) {
    this.heroService.deleteHero(heroId).subscribe({
      next: () => {
        this.heroes = this.heroes.filter(hero => hero.id !== heroId);
        console.log('Hero removed from screen');
      }
    });
  }
}