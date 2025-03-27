import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

// ------------------
function PaysCard() {
  const [countries, setContries] = useState([]);
  // ---------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/africa"
        );
        if (!response.ok) {
          throw new Error("Problème lors du chargement des données");
        }
        const data = await response.json();
        setContries(data);
      } catch {
        console.error(Error);
      }
    };
    fetchData();
  });
  return (
    <div className="row px-3">
      {countries.map((pays, index) => (
        <div key={index} className="col-md-3 col-12 p-2">
          <div className="card p-0">
            <img
              src={pays.flags.svg}
              alt={pays.name.common}
              className="card-img-top img-fluid"
              style={{ height: "150px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{pays.name.common}</h5>
              <p className="card-text">
                Population : {pays.population.toLocaleString()}
              </p>
              <a class="btn btn-primary" href="#">
                Voir plus
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
// ------------------

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="text-center my-3">Countries</h1>
        <PaysCard />
      </div>
    </BrowserRouter>
  );
}

export default App;
