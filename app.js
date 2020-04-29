// Already put a script using axios defined .. Not use required or import


const inputbox = document.querySelectorAll('input');
const inputCity = inputbox[0];
const inputCountry = inputbox[1];
const navbtn = document.querySelector('.btn');
const resText = document.querySelector('h3');
const background = document.querySelector('.page');
getDataHandler = () => {
    console.log('clicked');
    const cityName = inputCity.value;
    const countryName = inputCountry.value;
    const key = 'c109d1d755704898989b469af796224d';
    const url = `https://api.weatherbit.io/v2.0/current?city=${cityName},${countryName}&key=${key}`;
    getData(url);
} 


// var convertFToC = (far) => (((far -32) * 5) / 9);

const getData = async (url) => {
    try {
        const response = await axios.get(url);

        const data = response.data;

        // console.log(data.data[0].weather.description);
        var weatherStat = data.data[0].weather.description;
        if(weatherStat.includes('clouds') || weatherStat.includes('thunderstorm') ||  weatherStat.includes('rain') ){
            background.style.backgroundImage = "url('./assets/img/rainy.jpg')"
        } else {
            background.style.backgroundImage = "url('./assets/img/clear.jpg')"
        }
        resText.innerHTML = 
        `
        <div class="result"> 
        <h3> Timezone: ${data.data[0].timezone} </h3>
        <h3>Weather Status: ${data.data[0].weather.description} </h3> 
        <h3> Temperature: ${data.data[0].temp}°C</h3>
        `

        /*
        console.log(`Weather Status: ${data.Headline.Category}`);
        var maxCel = parseFloat(convertFToC(data.DailyForecasts[0].Temperature.Maximum.Value));
        var minCel = parseFloat(convertFToC(data.DailyForecasts[0].Temperature.Minimum.Value));
        console.log(`Maximum Temperature is: ${maxCel.toFixed(2)}C And Minimum Temperature is: ${minCel.toFixed(2)}C`);
        */
    } catch (error) {
        console.log(error);
    }
};

navbtn.addEventListener('click',getDataHandler);

console.log('OK');
