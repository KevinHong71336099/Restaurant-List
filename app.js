// include modules
const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const filterRestaurants = require("./filterRestaurants.js");
const restaurantList = require("./restaurant.json");

// set static files
app.use(express.static("public"));

// define related variables
const port = 3000;

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting routes
app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantList.results });
});

app.get("/restaurants/:restaurant_id", (req, res) => {
  const restaurant = restaurantList.results.find((restaurant) => {
    return restaurant.id.toString() === req.params.restaurant_id;
  });
  res.render("show", { restaurant: restaurant });
});

app.get("/search", (req, res) => {
  const { keyword, category, rating } = req.query;
  const filterData = filterRestaurants(
    restaurantList.results,
    keyword,
    category,
    rating
  );
  let notFound = filterData.length ? false : true;
  res.render("index", {
    restaurants: filterData,
    keyword: keyword,
    category: category,
    rating: rating,
    notFound: notFound,
  });
});

// start and listen on express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`);
});
