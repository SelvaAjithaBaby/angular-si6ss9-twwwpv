import { Action } from "@ngrx/store";
import { Converter } from "../model/converter.model";

export const ADD_COIN = "ADD_COIN";

export function converterReducer(state: Converter[] = [], action) {
  switch (action.type) {
    case ADD_COIN:
      return [...state, action.payload];
    default:
      return state;
  }
}
