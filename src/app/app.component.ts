import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  oddNumbers: number[] = []
  evenNumbers: number[] = []



  onIntervalFired(number: number) {
    if(number % 2 !== 0){
      this.oddNumbers.push(number)
    } else {
      this.evenNumbers.push(number)
    }
  }
}
