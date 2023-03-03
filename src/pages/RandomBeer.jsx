import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => setBeer(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div>
        {beer && (
          <div>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>First brewed: {beer.first_brewed}</p>
            <p>Attenuation level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default RandomBeer;
