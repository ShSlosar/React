import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
