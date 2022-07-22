import React from 'react';
import './App.css';
import AppWrapperComp from './components/wrapper';
import MyContext from './context/myContext';

function App() {
  return (
    <div className="App">
      <MyContext.Provider value={"Shelby"}>
        <AppWrapperComp>
        </AppWrapperComp>
      </MyContext.Provider>
    </div>
  );
}

export default App;
