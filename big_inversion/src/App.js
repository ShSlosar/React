import React from 'react';
import './App.css';
import PersonCard from './components/functComp';

function App() {
  return (
    <div className="App">
      <PersonCard lastName={"Slosar"} firstName={"Shelby"} age={29} hairColor={"Dark Brown"}/>
      <PersonCard lastName={"Doe"} firstName={"Jane"} age={30} hairColor={"Black"}/>
      <PersonCard lastName={"Miller-Bond"} firstName={"Elon"} age={31} hairColor={"Blond"}/>
      <PersonCard lastName={"Miller-Bond"} firstName={"Josh"} age={28} hairColor={"Dirty Blond"}/>
    </div>
  );
}

export default App;
