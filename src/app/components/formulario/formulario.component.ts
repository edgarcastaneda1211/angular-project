import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../../servicios/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',            
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']   
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup; // Declares a container variable that holds form data and rules
  showSuccessMessage = false; // Controls success message visibility

  constructor(private heroService: HeroService,  private router: Router ) { // form data in construc... blueprint of data we expect before we get any data
    // Initialize the form structure with validation rules
    this.formulario = new FormGroup({
      // Field for hero's name - required 
      name: new FormControl('', [
        Validators.required
      ]),
      
      // Field for hero's description - required
      description: new FormControl('', [
        Validators.required
      ]),
      
      // Field for hero's image URL - required
      image: new FormControl('', [
        Validators.required,
      ]),
      
      // Field for hero's first appearance date - required
      debutDate: new FormControl('', [ // ← Fixed typo: was "debuteDate"
        Validators.required
      ]),
      
      // Field for hero's publisher/house - required
      house: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {}

  // Function that runs when Save button is clicked
  // Sends form data to API and navigates to heroes list on success
  guardar() {
    // Get form data
    const heroData = this.formulario.value;
    
    // Call service and subscribe
    this.heroService.saveHeroAPI(heroData).subscribe({
      next: (savedHero) => {
        console.log('Success!');
        this.showSuccessMessage = true; // Show success message
        this.formulario.reset(); // Clear form
        this.formulario.markAsUntouched(); // Clear "touched" state
        this.formulario.markAsPristine();  // Clear "dirty" state
        
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