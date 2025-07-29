import { createReducer, on } from "@ngrx/store";
import { decrementCount, dynamicData, incrementCount } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(incrementCount, (state) => state + 1),
  on(decrementCount, (state) => state - 1)
);

export const dynamicDataReducer = createReducer(
  {},
  on(dynamicData, (state, { data }) => ({ ...state, ...data }))
);
