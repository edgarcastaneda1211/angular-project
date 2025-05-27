import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() messageFromParent: string = '';
  @Output() messageEvent = new EventEmitter<string>();
  childMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    this.messageEvent.emit(this.childMessage); // Sends data to parent through a trigger like a button!
  }

  // Method to handle real-time input changes
  onInputChange(value: string) {
    this.childMessage = value;
    this.messageEvent.emit(this.childMessage); // Send immediately to parent
  }
}
