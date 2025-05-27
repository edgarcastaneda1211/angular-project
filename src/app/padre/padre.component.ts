import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  parentMessage = ''; // Parent to child 
  receivedFromChild = ''; // Recived from child 

  constructor() { }

  ngOnInit(): void {
  }

  // Method that receives data from child
  onChildMessage(message: string) { // message from child is param 
    this.receivedFromChild = message; // store the childs message 
  }

}
