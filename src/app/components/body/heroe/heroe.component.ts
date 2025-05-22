import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../../class/heroe';
import { HeroService } from '../../../servicios/hero.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit { // UI / front end logic in combination with html that actually displays to screen 
  heroes: Heroe[] = [];
  loading = false;
  error = '';
  
   // Constructor: "Here's your phone book with all the service numbers"
  // You HAVE the numbers, but your phone isn't activated yet
  constructor(private heroService: HeroService) { } 
  
  // ngOnInit: "Phone is now activated and connected to cell towers!"
  // NOW you can actually make calls and they'll work properly
  ngOnInit(): void { 
    this.loadHeroes(); // Make the call - it will actually connect! This method runs! This will allow for the html
  }


// This is saying when we want to load heroes, we subscribe to the 
// Observable returned by heroService.getAllHeroes() which triggers 
// the HTTP request and gives us a stream of hero data that we can 
// react to asynchronously
private loadHeroes(): void {
   // Handles UI State of component! 
  this.loading = true;
  this.error = '';

  // SERVICE COORDINATION (component responsibility)
  this.heroService.getAllHeroes().subscribe({
    next: (data: Heroe[]) => {
      // UI STATE UPDATE (component responsibility)
      this.heroes = data;
      this.loading = false;
    },
    error: (err) => {
      this.handleError(err);
    }
  });
}

private handleError(err: any): void {
    this.error = 'Failed to load heroes';
    this.loading = false;
    console.error('Error in component:', err);
  }

    // COMPONENT - Updates the UI
onDeleteHero(heroId: number) {
  this.heroService.deleteHero(heroId).subscribe({
    next: () => {
      // Success updated UI
      this.heroes = this.heroes.filter(hero => hero.id !== heroId); 
      console.log('Hero removed from screen');
    }
  });
}

}