import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CalculatorService {
  constructor() {}

  resultText = "";

  converToAlphabet(inputText) {
    var numbers = inputText.split("#");
    this.resultText = "";
    numbers.forEach(value => {
      this.resultText += this.getAlphabet(value);
    });
    return this.resultText;
  }

  getAlphabet(value) {
    if (value) {
      var keyValue = parseInt(value);
      if (keyValue > 25) {
        keyValue = (keyValue % 25) - 1;
      }
      return String.fromCharCode(65 + keyValue);
    } else {
      return "";
    }
  }
}
