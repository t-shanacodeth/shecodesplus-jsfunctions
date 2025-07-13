// Feature 1

function setDateTime() {
  const currentDate = document.getElementById("day-and-time");
  const appDate = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[appDate.getDay()];
  let currentHour = appDate.getHours();
  let currentMinute = appDate.getMinutes();

  currentDate.innerHTML = `${currentDay} ${currentHour}:${currentMinute}`;
}

setDateTime();

// Feature 2

function displayCurrentCity(event) {
  event.preventDefault();

  const searchInput = document.querySelector("#search-input");
  console.log(searchInput);
  const currentCity = document.querySelector("h1");

  if (searchInput.value) {
    currentCity.innerHTML = `${searchInput.value}`;
  } else {
    searchInput.value = null;
    alert("Error! Please enter a city.");
  }
}

const weatherSearchForm = document.getElementById("weather-search-engine");
console.log(weatherSearchForm);
weatherSearchForm.addEventListener("submit", displayCurrentCity);

const searchButton = document.querySelector(".search-button");
console.log(searchButton);
searchButton.addEventListener("click", displayCurrentCity);
