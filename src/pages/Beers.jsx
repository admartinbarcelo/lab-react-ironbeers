import Header from '../components/Header';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Beers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
    .get("https://ih-beers-api2.herokuapp.com/beers")
    .then((response) => {
      setBeers(response.data);
    })
    .catch((error) => console.error(error))
  }, []);
  return (
    <div>
    <Header/>
      <h1>All Beers</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Beers;
