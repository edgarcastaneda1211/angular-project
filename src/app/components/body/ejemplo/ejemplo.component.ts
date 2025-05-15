import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.css']
})
export class EjemploComponent implements OnInit {
  // ngModel example
  inputText: string = '';
  
  // ngStyle example
  cardStyle = {
    'background-color': '#ffffff',
    'transition': 'background-color 0.3s'
  };
  
  // ngClass example
  buttonClass = 'btn-primary';
  buttonClasses = ['btn-primary', 'btn-success', 'btn-danger', 'btn-warning', 'btn-info'];
  currentClassIndex = 0;
  
  // ngSwitch example
  selectedHero: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  
 changeCardBackground() {
  // Simple array of color options
  const colors = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow', 'lavender'];
  
  // Get a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  // Update the cardStyle object
  this.cardStyle = {
    'background-color': randomColor,
    'transition': 'background-color 0.3s'
  };
}
  
  changeButtonClass() {
    this.currentClassIndex = (this.currentClassIndex + 1) % this.buttonClasses.length;
    this.buttonClass = this.buttonClasses[this.currentClassIndex];
  }
}