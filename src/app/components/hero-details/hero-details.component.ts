import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../class/heroe';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Heroe | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    // Get the id parameter from the URL
    this.route.params.subscribe(params => {
      const id = +params['id']; // Convert string to number with +
      this.hero = this.heroesService.getHeroById(id);
    });
  }

  // Navigate back to heroes list
  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}