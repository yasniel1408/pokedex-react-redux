export const logActions = () => (next: any) => (action: any) => {
  console.log("dispatching:", action);
  next(action);
};
