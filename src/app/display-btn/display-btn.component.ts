import { Component } from '@angular/core';

@Component({
  selector: 'app-display-btn',
  templateUrl: './display-btn.component.html',
  styleUrls: ['./display-btn.component.css']
})
export class DisplayBtnComponent {
  disabled = true
  clickLog = []

  displayInfo() {
    this.disabled = !this.disabled
    this.clickLog.unshift(new Date())
  }

  getbgColor(index: number) {
    if(index >= 4) return 'blue'
  }

  getColor(index: number) {
    if(index >= 4) return 'white'
  }
}
