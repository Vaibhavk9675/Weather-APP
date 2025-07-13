const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '22209bd3dfmsha32f7363ee377a1p152b75jsn299b1e6db585',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};
const getWeather = (q) => {
	cityName.innerHTML = q.charAt(0).toUpperCase() + q.slice(1).toLowerCase();
	fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${q}`, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)
			temp_c.innerHTML = response.current.temp_c
			temp_c2.innerHTML = response.current.temp_c
			feelslike_c.innerHTML = response.current.feelslike_c
			wind_degree.innerHTML = response.current.wind_degree
			precip_in.innerHTML = response.current.precip_in
			wind_kph.innerHTML = response.current.wind_kph
			// wind_dir.innerHTML = response.current.wind_dir
			uv.innerHTML = response.current.uv
			pressure_mb.innerHTML = response.current.pressure_mb
			cloud.innerHTML = response.current.cloud
			cloud2.innerHTML = response.current.cloud
			humidity.innerHTML = response.current.humidity
			humidity2.innerHTML = response.current.humidity
			condition_text.innerHTML = response.current.condition.text

		})
		.catch(error => console.error(error));
}
document.querySelector("form").addEventListener("submit", (e) => {
	e.preventDefault(); // Prevent page reload
	getWeather(document.getElementById("city").value); // Get value from input
});

getWeather("Delhi")

const getTableWeather = (city, row) => {
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then((res) => res.json())
    .then((data) => {
      const current = data.current;

      // Fill table cells
      row.querySelector(".temp").textContent = current.temp_c;
      row.querySelector(".feelslike").textContent = current.feelslike_c;
      row.querySelector(".humidity").textContent = current.humidity;
      row.querySelector(".precip").textContent = current.condition.text;
      row.querySelector(".wind").textContent = current.wind_kph;
    })
    .catch((err) => {
      console.error(`Error loading weather for ${city}`, err);
    });
};

document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("#weatherTable tbody tr");

  rows.forEach((row) => {
    const city = row.dataset.city;
    getTableWeather(city, row);
  });
});
