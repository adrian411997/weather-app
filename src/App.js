import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import Cards from "./components/Cards.jsx";
import Swal from "sweetalert2";

const apiKey = process.env.REACT_APP_API_KEY;
console.log(apiKey);
function App() {
  const [cities, setCities] = useState([]);

  function eliminar(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            country: recurso.sys.country,
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          if (cities.find((c) => c.id === ciudad.id)) {
            Swal.fire({
              title: "Imposible de continuar",
              text: "La ciudad ya se encuentra cargada",
              icon: "warning",
              confirmButtonText: "Confirmar",
            });
          } else {
            setCities((oldCities) => [...oldCities, ciudad]);
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  return (
    <div className="App">
      {/* Tu código acá: */}
      <SearchBar onSearch={onSearch} />
      <Cards cities={cities} onClose={eliminar} />
    </div>
  );
}
export default App;
