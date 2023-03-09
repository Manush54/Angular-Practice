import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  @Output() incrementNumber = new EventEmitter<number>
  inc_num = 1;
  numbers = [];
  id: ReturnType<typeof setInterval>
  
  onStartClick() {
    // Set Interval and store to id variable
    this.id = setInterval(() => {
      this.numbers.push(this.inc_num)
      this.incrementNumber.emit(this.inc_num)
      this.inc_num++
    }, 1000)

  }
  
  onStopClick(id: ReturnType<typeof setInterval>) {
    clearInterval(id)
  }
}
