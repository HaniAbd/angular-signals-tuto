import { createAction, props } from "@ngrx/store";

export const incrementCount = createAction("[Counter] Increment Count");
export const decrementCount = createAction("[Counter] Decrement Count");

// Dynamic action creation
export const dynamicData = createAction(
  "[dynamicData] Dynamic Data",
  props<{ data: any }>()
);
