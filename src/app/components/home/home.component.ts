import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeTitle = 'Welcome to Heroes App!';
  welcomeMessage = 'Bienvenido a mi app!';
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Could fetch personalization data or do other initialization
  }

  navigateToHeroes(): void {
    this.router.navigate(['/heroes']);
  }
}