import React, {useState} from 'react';
import "./App.css";
import Drinks from './components/mapProps';
import Groceries from './components/mapComponent';
import MessageForm from './components/liftingStateComp';
import MessageDisplay from './components/messageDisplay';
import SendArgComp from './components/sendingArg';
import FruitForm from './components/optionComp';

function App() {
  const [currentMsg, setCurrentMsg] = useState("No messages yet...");
  const messageArrived = (newMessage) => {
    setCurrentMsg(newMessage);
  }

  return (
    <div className="App">
      <Groceries />
      <Drinks drinkList={["Club Soda", "Coke", "Water", "Flavor Aid"]} />
      <MessageForm onNewMessage={ messageArrived } />
      <MessageDisplay message={currentMsg} />
      <SendArgComp movies={["Walli","Citizen Kane"]} />
      <FruitForm fruits={["apple", "Mango", "Peach", "Grape", "Tomato?"]}/>
    </div>
  );
}

export default App;
