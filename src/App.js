import React from 'react';
import './App.css';
import Lottery from './Lottery';
import './LotteryBall.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="mini lottery" numBalls={4} maxNum={10} />
      <Lottery title="Shivansh Lottery" numBalls={7} maxNum={10} />
    </div>
  );
}

export default App;
