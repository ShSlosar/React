import React, {useState} from "react";
import BoxGenerator from "./components/boxComponent";

function App() {
  const [currentMsg, setCurrentMsg] = useState("");
  const setNewColor = (newMessage) => {
    setCurrentMsg(newMessage);
  }
  return (
    <div className="App">
      <BoxGenerator />
    </div>
  );
}

export default App;
