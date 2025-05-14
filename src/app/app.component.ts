import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  } // like main in java - starting pont of code... connects to index/html
  showOwnership: boolean = true; // shared data that will be used in heroe html 
  isOurCharacters = true;

  ngOnInit(): void { // keep lifecylce clean... like putting shoes back in closet
    this.testFunction(); 
  }

  // test function for 1.
  testFunction(){
    let condition = true
    if(condition){
      let x = "This is let var";
      var y = "This is var";
      console.log(x);
      console.log(y);
    } else {
      console.log("false... logging x here wouldnt work. LETS work only in scope!")
    }
  }
}