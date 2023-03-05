import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function HomePage() {
  
  return (
    <div>
      <h1>IronBeers</h1>
      <div>
        <img src={beers} alt="beers" />
        <div>
          <h2>
            <Link to="/beers" className="text-decoration-none">All Beers</Link>
          </h2>
          <p className="w-50 mx-auto">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, vivamus
            pharetra egestas lectus. sit amet eleifend ex tincidunt in. Nam
            dictum dolor arcu ut dignissim varius.
          </p>
        </div>

        <img src={randomBeer} alt="beers" />
        <div>
          <h2>
            <Link to="/random-beer" className="text-decoration-none">Random Beer</Link>
          </h2>
          <p className="w-50 mx-auto">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, vivamus
            pharetra egestas lectus. sit amet eleifend ex tincidunt in. Nam
            dictum dolor arcu ut dignissim varius.
          </p>
        </div>

        <img src={newBeer} alt="beers" />
        <div>
          <h2>
            <Link to="/new-beer" className="text-decoration-none">New Beer</Link>
          </h2>
          <p className="w-50 mx-auto">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit, vivamus
            pharetra egestas lectus. sit amet eleifend ex tincidunt in. Nam
            dictum dolor arcu ut dignissim varius.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
