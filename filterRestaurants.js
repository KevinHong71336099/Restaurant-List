function filterRestaurants(restaurantData, keyword, category, rating) {
  let filterData = restaurantData.filter((data) => {
    return data.name.toLowerCase().includes(keyword.trim().toLowerCase());
  });

  filterData =
    category === "All"
      ? filterData
      : filterData.filter((data) => data.category === category);

  filterData =
    rating === "0"
      ? filterData
      : filterData.filter((data) => data.rating >= Number(rating));

  return filterData;
}

module.exports = filterRestaurants;
