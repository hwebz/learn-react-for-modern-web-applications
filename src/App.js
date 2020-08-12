import React, { useState } from 'react';
import { CounterButton } from './CounterButton';
import { Greeting } from './Greeting';
import { CongratulationsMessage } from './CongratulationsMessage';

function App() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton numberOfClicks={numberOfClicks} setNumberOfClicks={increment} />
        <Greeting name="Shaun" numberOfMessages="10" />
      </header>
    </div>
  );
}

export default App;
