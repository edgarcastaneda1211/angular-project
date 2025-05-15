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
  modalTheme = 'modal-theme-default'; // Default theme
  themeClasses = ['default', 'primary', 'success', 'danger', 'warning'];
  currentThemeIndex = 0;
  
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
  
  changeModalTheme() {
  // Define available themes
  const themeClasses = ['primary', 'success', 'danger', 'warning', 'info'];
  
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * themeClasses.length); 
  const randomTheme = themeClasses[randomIndex];// Get a random theme from the index
  
  // Apply the random theme
  this.buttonClass = `btn-${randomTheme}`;// changes the buttons color using bootstrap classes
  this.modalTheme = `modal-theme-${randomTheme}`; // change the modals appearance if ngClass = modal theme 
}
}