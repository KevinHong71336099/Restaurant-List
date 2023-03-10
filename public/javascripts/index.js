const searchCategories = document.querySelector("#search-categories");
const searchRating = document.querySelector("#search-rating");

// set up the selected category option
if (searchCategories.dataset.value)
  searchCategories.value = searchCategories.dataset.value;

// set up the selected rating option
if (searchRating.dataset.value) searchRating.value = searchRating.dataset.value;
