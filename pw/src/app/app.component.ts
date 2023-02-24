import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //properties
  password = '';
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  //event handlers
  onChangeLength($event: any) {
    const inputVal = $event.target.value;
    const parsedValue = parseInt(inputVal);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  onChangeLetters() {
    this.includeLetters = !this.includeLetters;
  }
  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  //generate button handler
  onButtonClick() {
    console.log(`
    length: ${this.length}
    letters: ${this.includeLetters}
    numbers: ${this.includeNumbers}
    symbols: ${this.includeSymbols}
    `);
    this.password = 'MY PASSWORD'
  }
}
