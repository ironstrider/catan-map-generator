import './App.scss';
import MapGenerator from '../util/map-generator';
import { tileCounts, numberCounts, portCounts, portGeometries } from '../data/map';
import { useState } from 'react';
import GameMap from './GameMap';
import Footer from './Footer';


function App() {
  const mapGenerator = new MapGenerator(tileCounts, numberCounts, portCounts, portGeometries);
  const [map, setMap] = useState(mapGenerator.generate());

  const generateMap = () => {
    const newMap = mapGenerator.generate();
    setMap(newMap);
  }

  const size = 50;
  const viewBox = "-285 -250 570 500";

  return (
    <div className="App">

      <header>
        <h1>Catan Map Generator</h1>
      </header>

      <section className="controls">
        <button className="generate" onClick={generateMap}>Generate</button>
      </section>

      <div className="map-container">
        <section className="map">
          <svg viewBox={viewBox}>
            <GameMap map={map} size={size} />
          </svg>
        </section>
      </div>

      <Footer/>

    </div>
  );
}

export default App;
