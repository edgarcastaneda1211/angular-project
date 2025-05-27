// component-tracker.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Tracks which component is currently active
// It's like attendance in class - you have to say "Here!" when your name is called
export class ComponentTrackerService {

  // Teacher's attendance book - stores who said "Here!" most recently
  private currentComponentSource = new BehaviorSubject<string>('Application started');
  
  // Public window where students can look to see who's currently present
  currentComponent$ = this.currentComponentSource.asObservable();

  // Method for students to raise their hand and say "Here! I'm present!"
  announceComponent(componentName: string) {
    this.currentComponentSource.next(`${componentName} component loaded`);
  }
}
