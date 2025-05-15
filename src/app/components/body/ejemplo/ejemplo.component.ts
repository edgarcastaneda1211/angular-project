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
    // Generate random background color
    const colors = ['#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#d1ecf1', '#d4edda', '#f8d7da'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
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