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
