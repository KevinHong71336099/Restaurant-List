// include modules
const express = reuqire("express");
const exphbs = require("express-handlebars");
const app = express();

// define related variables
const port = 3000;

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting routes
app.get("/", (req, res) => {
  res.send(`My restaurant list on express`);
});

// start and listen on express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
