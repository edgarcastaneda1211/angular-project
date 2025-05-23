import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../../../servicios/hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  formulario: FormGroup;
  heroId: number;
  heroName: string = '';
  loading = false;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {
    // Initialize form with editable fields only
    this.formulario = new FormGroup({
      description: new FormControl('', [Validators.required]),
      house: new FormControl('', [Validators.required]),
      debutDate: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    // Get hero ID from URL parameters
    this.heroId = +this.route.snapshot.params['id'];
    this.loadHeroData();
  }

  loadHeroData(): void {
    this.loading = true;
    
    this.heroService.getAllHeroes().subscribe({
      next: (heroes) => {
        const hero = heroes.find(h => h.id === this.heroId);
        if (hero) {
          // Store name for display (read-only)
          this.heroName = hero.name;
          
          // Pre-fill form with existing hero data
          this.formulario.patchValue({
            description: hero.description,
            house: hero.house,
            debutDate: hero.debutDate
          });
        } else {
          this.error = `Hero with ID ${this.heroId} not found`;
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load hero data';
        this.loading = false;
        console.error('Error loading hero:', err);
      }
    });
  }

  // Save edited hero data
  saveEdit(): void {
    if (this.formulario.valid) {
      const updatedData = this.formulario.value;
      
      this.heroService.updateHero(this.heroId, updatedData).subscribe({
        next: (updatedHero) => {
          console.log('Hero updated successfully!');
          this.goBack(); // Return to hero list
        },
        error: (err) => {
          console.error('Error updating hero:', err);
          alert('Failed to update hero. Please try again.');
        }
      });
    }
  }

  // Navigate back to heroes list
  goBack(): void {
    this.router.navigate(['/heroes']);
  }
}