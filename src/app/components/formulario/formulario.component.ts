import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
 selector: 'app-formulario',            
 templateUrl: './formulario.component.html',
 styleUrls: ['./formulario.component.css']   
})
export class FormularioComponent implements OnInit {
 formulario: FormGroup; // Declares a container variable that holds form data and rules

 constructor() {
   // Initialize the form structure with validation rules
   this.formulario = new FormGroup({
     // Field for hero's name - required 
     nombre: new FormControl('', [
       Validators.required
     ]),
     
     // Field for hero's description - required
     descripcion: new FormControl('', [
       Validators.required
     ]),
     
     // Field for hero's image URL - required
     imagen: new FormControl('', [
       Validators.required,
     ]),
     
     // Field for hero's first appearance date - required
     fechaAparicion: new FormControl('', [
       Validators.required
     ]),
     
     // Field for hero's publisher/house - required
     casa: new FormControl('', [
       Validators.required
     ])
   });
 }

 ngOnInit(): void {}

 // Function that runs when Save button is clicked
 // Logs the complete form data object to the console
 guardar() {
   console.log(this.formulario.value);
     this.formulario.reset();
 }
}