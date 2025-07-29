import { createReducer, on } from "@ngrx/store";
import { decrementCount, incrementCount } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1)
);
