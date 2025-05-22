import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeroService } from '../../servicios/hero.service';

@Component({
  selector: 'app-formulario',            
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']   
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup; // Declares a container variable that holds form data and rules

  constructor(private heroService: HeroService) { // form data in construc... blueprint of data we expect before we get any data
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
  // Logs the complete form data object to the console
  guardar() {
    // Get form data
    const heroData = this.formulario.value;
    
    // Call service and subscribe
    this.heroService.saveHero(heroData).subscribe({
      next: (savedHero) => {
        console.log('Success!');
        this.formulario.reset(); // Clear form
        this.formulario.markAsUntouched(); // Clear "touched" state
      this.formulario.markAsPristine();  // Clear "dirty" state
      },
      error: (error) => {
        console.log('Error saving hero');
      }
    });
  }
}