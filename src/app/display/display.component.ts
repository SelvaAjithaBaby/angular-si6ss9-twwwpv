import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Converter } from "../model/converter.model";
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"]
})
export class DisplayComponent implements OnInit {
  coins: Observable<Converter[]>;
  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => {
      return state.converter;
    });
  }

  ngOnInit() {}
}
