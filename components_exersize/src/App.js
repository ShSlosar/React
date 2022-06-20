import React from 'react';
import './App.css';
import MyNewComponent from './components/myNewComponent';
import MySecondComponent from './components/mySecondComponent';

function App() {
  return (
    <div className="App">
      <MySecondComponent firstName={"Shelby"} lastName={"Slosar"} age="29" hair={"brown"}/> 
      <MySecondComponent firstName={"John"} lastName={"Cena"} age="40" hair={"Bald"}/> 
      <MySecondComponent firstName={"Jamie"} lastName={"Smith"} age="26" hair={"Purple"}/> 
      <MySecondComponent firstName={"Aaron"} lastName={"Mills"} age="30" hair={"Red"}/> 
      <MyNewComponent someText={"Hello World!"}/>
      <MyNewComponent someText={"We are using MyNewComponent"}/>
      <MyNewComponent someText={"Very Nice!"}/>
    </div>
  );
}

export default App;
