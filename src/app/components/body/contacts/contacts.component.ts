import { Component, OnInit } from '@angular/core';
import { ComponentTrackerService } from '../../../servicios/component-tracker.service'; // ← Add import


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private tracker: ComponentTrackerService) { } //  Inject service

  ngOnInit(): void {
    this.tracker.announceComponent('Contact'); // Announce this component
  }
}