import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage'
import Beers from './pages/Beers'
import RandomBeer from './pages/RandomBeer'
import CreateBeer from './pages/CreateBeer'
import DetailsBeer from './pages/DetailsBeer'

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element = {<HomePage/>}/>
      <Route path='/beers' element = {<Beers/>}/>
      <Route path='/random-beer' element = {<RandomBeer/>}/>
      <Route path='/new-beer' element = {<CreateBeer/>}/>
      <Route path='/beers/:beerId' element = {<DetailsBeer/>}/>
    </Routes>
    </div>
  );
}

export default App;
