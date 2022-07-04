import React from 'react';
import Drinks from './components/mapProps';
import Groceries from './components/mapComponent';

function App() {
  return (
    <div className="App">
      <Groceries />
      <Drinks drinkList={["Club Soda", "Coke", "Water", "Flavor Aid"]} />
    </div>
  );
}

export default App;
