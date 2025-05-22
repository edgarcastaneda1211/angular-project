import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../servicios/hero.service'; // Make sure this path is correct
import { Heroe } from '../../class/heroe';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Heroe | undefined;
  loading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    
    // Get the id parameter from the URL
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert string to number with +
      
      // Subscribe to the observable to get the heroes array
      this.heroService.getAllHeroes().subscribe(
        (heroes) => {
          // Find the hero with the matching index or ID
          this.hero = heroes.find(h => h.id === id);
          
          this.loading = false;
          
          if (!this.hero) {
            this.error = `Hero with ID ${id} not found`;
            console.error(this.error);
          }
        },
        (err) => {
          this.error = 'Failed to load hero details';
          this.loading = false;
          console.error(err);
        }
      );
    });
  }

  // Navigate back to heroes list
  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}