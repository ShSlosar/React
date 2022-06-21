import React from 'react';
import './App.css';
import MyNewComponent from './components/myNewComponent';
import MySecondComponent from './components/mySecondComponent';
import ThirdComponent from './components/thirdComponent';

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
      <button onClick={()=> alert("the button has been clicked!")}>Click Me!</button>
      <ThirdComponent header={'Header'}>
        <p>This is the first child.</p>
        <p>This is the second child.</p>
        <p>Forgotton Child.</p>
        <p>The baby.</p>
      </ThirdComponent>
    </div>
  );
}

export default App;
