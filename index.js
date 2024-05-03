const form = document.getElementById("form");
const input = document.getElementById("input");
const currentWeather = document.getElementById("weather");
const currenIcon = document.getElementById("icon");
const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const windSpeed = document.getElementById("windSpeed");
const icon = document.getElementById("icon");
const crrtemp = document.getElementById("crrtemp");
const city = document.getElementById("city");
const date = document.getElementById("date");
const weekDay = document.getElementById("dayName");

const time1 = document.getElementById("time1");
const image1 = document.getElementById("image1");
const forecast1 = document.getElementById("forecast1");
const temp1 = document.getElementById("temp1");
const wind1 = document.getElementById("wind1");

const time2 = document.getElementById("time2");
const image2 = document.getElementById("image2");
const forecast2 = document.getElementById("forecast2");
const temp2 = document.getElementById("temp2");
const wind2 = document.getElementById("wind2");

const time3 = document.getElementById("time3");
const image3 = document.getElementById("image3");
const forecast3 = document.getElementById("forecast3");
const temp3 = document.getElementById("temp3");
const wind3 = document.getElementById("wind3");

const time4 = document.getElementById("time4");
const image4 = document.getElementById("image4");
const forecast4 = document.getElementById("forecast4");
const temp4 = document.getElementById("temp4");
const wind4 = document.getElementById("wind4");

const time5 = document.getElementById("time5");
const image5 = document.getElementById("image5");
const forecast5 = document.getElementById("forecast5");
const temp5 = document.getElementById("temp5");
const wind5 = document.getElementById("wind5");

const time6 = document.getElementById("time6");
const image6 = document.getElementById("image6");
const forecast6 = document.getElementById("forecast6");
const temp6 = document.getElementById("temp6");
const wind6 = document.getElementById("wind6");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(
      "GET",
      `https://api.openweathermap.org/data/2.5/forecast?q=${input.value}&units=metric&appid=7464f7fe29020e25bde1cc80e4d13718`
    );

    xhr.onload = () => {
      let responseData = xhr.response;
      console.log(responseData);
      city.innerHTML = input.value;
      date.innerHTML = new Date().toLocaleDateString();
      const icon0 = responseData.list[0].weather[0].icon;
      icon.src = `https://openweathermap.org/img/wn/${icon0}.png`;
      crrtemp.innerHTML = Math.round(responseData.list[0].main.temp) + "°C";
      minTemp.innerHTML = Math.trunc(responseData.list[0].main.temp_min) + "°C";
      maxTemp.innerHTML = Math.trunc(responseData.list[0].main.temp_max) + "°C";
      windSpeed.innerHTML = responseData.list[0].wind.speed + " " + "km/h";

      const today = new Date();
      const options = { weekday: "long" };
      const dayName = today.toLocaleDateString("en-US", options);
      weekDay.innerHTML = dayName;

      time1.innerHTML = responseData.list[0].dt_txt.slice(11, 16);
      const icon1 = responseData.list[0].weather[0].icon;
      image1.src = `https://openweathermap.org/img/wn/${icon1}.png`;
      forecast1.innerHTML = responseData.list[0].weather[0].main;
      temp1.innerHTML = Math.trunc(responseData.list[0].main.temp);
      wind1.innerHTML = Math.trunc(responseData.list[0].wind.speed);

      time2.innerHTML = responseData.list[1].dt_txt.slice(11, 16);
      const icon2 = responseData.list[1].weather[0].icon;
      image2.src = `https://openweathermap.org/img/wn/${icon2}.png`;
      forecast2.innerHTML = responseData.list[1].weather[0].main;
      temp2.innerHTML = Math.trunc(responseData.list[1].main.temp);
      wind2.innerHTML = Math.trunc(responseData.list[1].wind.speed);

      time3.innerHTML = responseData.list[2].dt_txt.slice(11, 16);
      const icon3 = responseData.list[2].weather[0].icon;
      image3.src = `https://openweathermap.org/img/wn/${icon3}.png`;
      forecast3.innerHTML = responseData.list[2].weather[0].main;
      temp3.innerHTML = Math.trunc(responseData.list[2].main.temp);
      wind3.innerHTML = Math.trunc(responseData.list[2].wind.speed);

      time4.innerHTML = responseData.list[3].dt_txt.slice(11, 16);
      const icon4 = responseData.list[3].weather[0].icon;
      image4.src = `https://openweathermap.org/img/wn/${icon4}.png`;
      forecast4.innerHTML = responseData.list[3].weather[0].main;
      temp4.innerHTML = Math.trunc(responseData.list[3].main.temp);
      wind4.innerHTML = Math.trunc(responseData.list[3].wind.speed);

      time5.innerHTML = responseData.list[4].dt_txt.slice(11, 16);
      const icon5 = responseData.list[4].weather[0].icon;
      image5.src = `https://openweathermap.org/img/wn/${icon5}.png`;
      forecast5.innerHTML = responseData.list[4].weather[0].main;
      temp5.innerHTML = Math.trunc(responseData.list[4].main.temp);
      wind5.innerHTML = Math.trunc(responseData.list[4].wind.speed);

      time6.innerHTML = responseData.list[5].dt_txt.slice(11, 16);
      const icon6 = responseData.list[5].weather[0].icon;
      image6.src = `https://openweathermap.org/img/wn/${icon6}.png`;
      forecast6.innerHTML = responseData.list[5].weather[0].main;
      temp6.innerHTML = Math.trunc(responseData.list[5].main.temp);
      wind6.innerHTML = Math.trunc(responseData.list[5].wind.speed);
    };

    xhr.send();
  });
});
