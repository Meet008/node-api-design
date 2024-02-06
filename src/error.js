process.on("uncaughtException", () => {
  //can do something here for unhandled async exceptions
});

process.on("unhandledRejection", () => {
  //can do something here for unhandled exceptions
});
