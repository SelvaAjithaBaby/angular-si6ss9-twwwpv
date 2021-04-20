import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalculatorService } from "./calculator.service";
import { converterReducer } from "./reducers/converter.reducer";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: CalculatorComponent }]),
    StoreModule.forRoot({ converter: converterReducer })
  ],
  declarations: [AppComponent, CalculatorComponent],
  bootstrap: [AppComponent],
  providers: [CalculatorService]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
