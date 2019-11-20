import React from 'react';
import Lottery from './Lottery';

function App() {
  return (
    <div>
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
    </div>
  );
}

export default App;