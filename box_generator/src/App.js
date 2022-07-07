import React, {useState} from "react";
import ColorForm from "./components/colorInput";

function App() {
  const [currentMsg, setCurrentMsg] = useState("");
  const setNewColor = (newMessage) => {
    setCurrentMsg(newMessage);
  }
  return (
    <div className="App">
      <ColorForm onNewColor={setNewColor}/>
    </div>
  );
}

export default App;
