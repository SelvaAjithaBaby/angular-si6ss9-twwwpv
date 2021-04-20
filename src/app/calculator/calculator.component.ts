import { Component, OnInit } from "@angular/core";
import { CalculatorService } from "../calculator.service";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { Converter } from "../model/converter.model";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  constructor(
    private calculatorService: CalculatorService,
    private store: Store<AppState>
  ) {}

  inputText = "";
  resultText = "";
  keyValue: number;

  ngOnInit() {}

  pressKey(key) {
    if (key == "D") {
      console.log("Delete");
    }

    this.inputText += key;
    console.log("You typed ", key);
    this.calculate();
  }

  delete() {
    this.inputText = this.inputText.slice(0, -1);
    this.calculate();
  }

  calculate() {
    this.resultText = this.calculatorService.converToAlphabet(this.inputText);
    this.store.dispatch({
      type: "ADD_COIN",
      payload: <Converter>{
        inputText: this.inputText,
        value: "ajitha"
      }
    });
  }
}
