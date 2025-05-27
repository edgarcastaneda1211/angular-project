import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComponentTrackerService } from '../../servicios/component-tracker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  currentMessage = ''; // To display which component is active
  private subscription: Subscription;

  constructor(private tracker: ComponentTrackerService) {} // Inject

  ngOnInit() {
  // Listen to the component announcement stream
  const messageStream = this.tracker.currentComponent$;
  
  // When a new message comes in, update our display
  this.subscription = messageStream.subscribe(
    (newMessage) => {
      this.currentMessage = newMessage; // Show the new component name
    }
  );
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}