document.getElementById("getWeather").addEventListener("click", function () {
    getWeather();
  });
  
  async function getWeather() {
    const city = document.getElementById("city").value;
  
    if (city !== "") {
      console.log("if");
      const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "0dc8298a6dmsh75035bc3a73c04cp192481jsn8136359002c4",
          "x-rapidapi-host": "open-weather13.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        ShowingTheData(result);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please Enter the valid Co-ordinates");
    }
  }
  
  function ShowingTheData(result) {
    if (result.cod == 404) {
      document.getElementById("dynamicDisplay").innerHTML = "City Not Found";
    } else {
      const tempInCel = Math.round(((result.main.temp - 32) * 5) / 9);
      const displayTheData = `
            <h1>Weather in ${result.name}, ${result.sys.country}</h1>
            <p>temprature is ${tempInCel}</p>
            <p>discription ${result.weather[0].description}</p>
            <p>humadity ${result.main.humidity}</p>
            <p>Wind Speed ${result.wind.speed}</p>`;
            document.getElementById("dynamicDisplay").innerHTML = displayTheData;
    }
  }