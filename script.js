let dateTimeBtn = document.querySelector("#dateTimeBtn");
let openTabBtn = document.querySelector("#openTabBtn");
let closeTabBtn = document.querySelector("#closeTabBtn");
let tab1 = document.querySelector("#tab1");
let tab2 = document.querySelector("#tab2");

// Calling currentDateAndTime function when the page loads
let finalDateTime = currentDateAndTime();

// Setting the initial text content of the button with the formatted date and time

function updateDateTime() {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.toLocaleString("default", { month: "long" });
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();

  //setting 24hour to 12 hour format
  hours = hours % 12;
  // hours = hours ? hours : 12;
  let ampm = hours < 12 ? "PM" : "AM";
  let minutes = currentDate.getMinutes();
  minutes = "0" + minutes;
  let wholeData = `${date} ${month} ${year} | ${hours}:${minutes} ${ampm}`;
  dateTimeBtn.textContent = wholeData; // Update button text content
}

updateDateTime();

// Set interval to update the date and time every 60 seconds
let liveTimings = setInterval(updateDateTime, 60000);

//Setting open and close tab functionality

openTabBtn.style.opacity = "0";

closeTabBtn.addEventListener("click", () => {
  tab2.style.display = "none";
  tab1.style.width = "100vw";
  openTabBtn.style.opacity = "1";
  tab1.classList.add("animate-fadeRight", "animate-infinite");
});

openTabBtn.addEventListener("click", () => {
  openTabBtn.style.opacity = "0";
  tab2.style.display = "block";
  tab1.style.width = "70vw";
});

function currentDateAndTime() {
  let currentDate = new Date();
  let day = currentDate.getDate();

  let month = currentDate.toLocaleString("default", { month: "long" });

  let year = currentDate.getFullYear();

  let hours = currentDate.getHours();

  const minutes = ("0" + currentDate.getMinutes()).slice(-2); // Add leading zero if minutes < 10

  // Convert hours to 12-hour format and determine AM/PM
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;

  // Construct the formatted date and time string
  let formattedDateTime = `${day} ${month} ${year} | ${hours}:${minutes} ${ampm}`;
  console.log(formattedDateTime);
  return formattedDateTime;
}

// async function getDataFromAPI() {
//   try {
//     let latitude = 17.6333;
//     let longitude = 18.3333;
//     let APIKey = "0b14062798f3a1b93b1b1c0d27900d7a";
//     let data = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}`
//     );
//     let jsonData = await data.json();
//     console.log(jsonData);
//   } catch {
//     console.log("Enter a valid value");
//   }
// }
// getDataFromAPI();

async function render(data) {
  try {
    // Extract temperature from the first forecast entry
    let temperature = data.list[0].main.temp;
    // Convert temperature to Celsius
    let temperatureCelsius = temperature - 273.15;

    // Create a paragraph element to display the temperature
    let para = document.createElement("p");

    para.textContent = `${temperatureCelsius.toFixed(2)} °C`;
    document.body.appendChild(para);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }

  async function fetchWheatherDetails() {
    try {
      // Construct the API URL with the correct parameters
      let city = "mumbai";
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=583f12d47da75834ae881d573514caec`
      );
      let data = await response.json();
      render(data);
    } catch {
      console.log();
    }
  }
}
