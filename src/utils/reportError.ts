export const reportError = <T = unknown>(err?: T) => {
  // TODO: Make a request to error metric API
  console.error(err);
};
