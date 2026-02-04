const apiKey = "14ebbc8d25f841104fe9820ea3e104b6";

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (!city) {
        result.innerHTML = "❌ Please enter a city name";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => {

            console.log("API RESPONSE:", data); // 🔍 DEBUG

            if (data.cod !== 200) {
                result.innerHTML = `❌ ${data.message}`;
                return;
            }

            result.innerHTML = `
                <h3>${data.name}, ${data.sys.country}</h3>
                <p>🌡️ Temp: ${data.main.temp} °C</p>
                <p>☁️ ${data.weather[0].description}</p>
                <p>💧 Humidity: ${data.main.humidity}%</p>
                <p>🌬️ Wind: ${data.wind.speed} m/s</p>
            `;
        })
        .catch(() => {
            result.innerHTML = "⚠️ Network error";
        });
}
