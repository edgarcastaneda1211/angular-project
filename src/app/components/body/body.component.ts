import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  /* Flags for body to be shown */
  showHeroes = true;
  showWelcomeMessage = true;

  constructor() { }

  ngOnInit(): void {
  }

}
