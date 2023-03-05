import Header from "../components/Header";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <Header />
      <div>
        <h1>All Beers</h1>
        <ul className="list-unstyled">
          {beers.map((beer) => (
            <li key={beer._id} className="media mb-4">
              <img
                src={beer.image_url}
                alt={beer.name}
                className="mr-3"
                width="100"
                height="250"
              />
              <div className="media-body">
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p className="mb-0">Contributed by: {beer.contributed_by}</p>
                <Link to={`/beers/${beer._id}`}>Details</Link>
              </div>
              <hr className="mt-3 mb-0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Beers;
