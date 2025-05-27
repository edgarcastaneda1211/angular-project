// formulario.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../../servicios/hero.service';
import { Router } from '@angular/router';
import { ComponentTrackerService } from '../../servicios/component-tracker.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup; // Form container with validation rules
  showSuccessMessage = false;

  constructor(private heroService: HeroService, private router: Router, private tracker: ComponentTrackerService) {
    // Initialize form structure
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      debutDate: new FormControl('', [Validators.required]),
      house: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.tracker.announceComponent('Formulario');
  }

  // Save form data and navigate on success
  guardar() {
    const heroData = this.formulario.value;
    
    this.heroService.saveHeroAPI(heroData).subscribe({
      next: (savedHero) => {
        console.log('Success!');
        this.showSuccessMessage = true;
        this.formulario.reset();
        this.formulario.markAsUntouched();
        this.formulario.markAsPristine();
        
        // Wait 2 seconds, then navigate
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['/heroes']);
        }, 2000);
      },
      error: (error) => {
        console.log('Error saving hero');
      }
    });
  }
}
