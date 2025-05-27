import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentTrackerService } from '../../servicios/component-tracker.service'; // ← Add this line


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeTitle = 'Welcome to Heroes App!';
  welcomeMessage = 'Bienvenido a mi app!';
  
  constructor(private router: Router,private tracker: ComponentTrackerService) { }

  ngOnInit(): void {
    // Could fetch personalization data or do other initialization
        this.tracker.announceComponent('Home'); // 

  }

  navigateToHeroes(): void {
    this.router.navigate(['/heroes']);
  }
}