import React from 'react';
import './App.css';
import Birthday from './components/birthdayComponent';

function App() {
  return (
    <div className="App">
      <Birthday name={"Jane Doe"} hair={"black"} age={26} />
      <Birthday name={"John Doe"} hair={"brown"} age={30} />
    </div>
  );
}

export default App;
