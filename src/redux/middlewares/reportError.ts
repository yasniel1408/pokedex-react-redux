import { SET_ERROR } from "../actions/types";

export const reportError = (store: any) => (next: any) => (actionInfo: any) => {
  const { action } = actionInfo;
  if (action?.type === SET_ERROR) {
    console.error(action.payload);
  }
  next(actionInfo);
};
