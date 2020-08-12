import React from 'react';
import { CounterButton } from './CounterButton';
import { Greeting } from './Greeting';
import { CongratulationsMessage } from './CongratulationsMessage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CongratulationsMessage threshold={10} />
        <CounterButton />
        <Greeting name="Shaun" numberOfMessages="10" />
      </header>
    </div>
  );
}

export default App;
