import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LANES from './assets/poolDefault.json';
import { LaneViewer } from './components/LaneViewer';
import { Lane } from './interfaces/lane';
import { PoolViewer } from './components/PoolViewer';
import { Pool } from './interfaces/pool';

function App() {
  const [lane, setLane] = useState<Lane>(LANES[0] as Lane);
  const [pool, setPool] = useState<Pool>({lanes: LANES, numberOfLanes: 10} as Pool);


  return (
    <div className="App">
      <header className="App-header">
      </header>
    <PoolViewer pool={pool} setPool={setPool} setLane={setLane}></PoolViewer>
    <LaneViewer lane={lane} setLane={setLane}></LaneViewer>
    </div>
  );
}

export default App;
