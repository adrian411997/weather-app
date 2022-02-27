import React, { useState } from "react";
import Nav from "./Nav.jsx";
import "./Nav.css";

export default function SearchBar({ onSearch }) {
  function buscar(event) {
    event.preventDefault();
    var input;
    if (typeof onSearch === "function") {
      input = document.getElementById("search");
      onSearch(input.value);
    }
    input.value = "";
  }
  return (
    <header class="header">
      <div className="w-100 content text-light">
        <Nav />
        <div className="col-6 text-right">
          <form onSubmit={buscar}>
            <div class="">
              <input
                type="text"
                className="input"
                id="search"
                style={{ height: 35 }}
                placeholder="Ingrese una ciudad"
              />
              <input
                className="btn btn-outline-secondary align-middle mb-1 ml-2 button"
                type="submit"
                value="Agregar"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
