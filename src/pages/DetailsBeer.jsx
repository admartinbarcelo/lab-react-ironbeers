import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsBeer() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState({});

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((result) => {
        setBeer(result.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <>
    <Header/>
    <div className="card mb-3">
      <img src={beer.image_url} className="card-img-top" alt={beer.title} />
      <div className="card-body">
        <h5 className="card-title">Name: {beer.name}</h5>
        <p className="card-text">{beer.tagline}</p>
        <p className="card-text">
          <strong>First brewed on</strong> {beer.first_brewed}
        </p>
        <p className="card-text">
          <strong>Contributed by:</strong> {beer.contributed_by}
        </p>
        <p className="card-text">
          <strong>Attenuation level:</strong> {beer.attenuation_level}
        </p>
        <p className="card-text">
          <strong>Description:</strong> {beer.description}
        </p>
      </div>
    </div>
    </>
  );
}
export default DetailsBeer;
