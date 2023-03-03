import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Iron Beers</h1>
      <ul>
        <li>
          <Link to="/beers">Beers</Link>
        </li>
        <li>
          <Link to="/random-beer">Random Beer</Link>
        </li>
        <li>
          <Link to="/new-beer">Create Beer</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
