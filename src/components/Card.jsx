import React from "react";
import "./Card.css";

export default function Card({
  country,
  clima,
  min,
  max,
  name,
  img,
  onClose,
  id,
}) {
  var weather;
  if (clima === "Clouds") weather = "nublado";
  if (clima === "Drizzle") weather = "llovizna";
  if (clima === "Clear") weather = "despejado";
  return (
    <div className="card">
      <div id="closeIcon">
        <button onClick={onClose} className="btn btn-danger btn-circle">
          X
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title pt-2">
          {name}, {country}
        </h5>
        <div className={"row text-light " + weather}>
          <div className="col-sm-4 col-md-4 col-lg-4 pt-2">
            <p>
              <b>Min</b>
            </p>
            <p>
              <b>{min}°</b>
            </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 pt-2">
            <p>
              <b>Max</b>
            </p>
            <p>
              <b>{max}°</b>
            </p>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 mt-2">
            <img
              className="iconoClima"
              src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
              width="70"
              height="70"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
