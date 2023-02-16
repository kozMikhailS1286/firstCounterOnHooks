import React, {useState} from 'react';
import'./App.css';
import Settings from "./Settings";

function App() {

  let[counter, setCounter] = useState(0)

  const counterPlus = () => {
    setCounter(++counter)
    if (counter > 5) {
      setCounter(5);
      }
    }

    const counterDecr = () => {
      if (counter !== 0) {
        setCounter((prev)=>prev-1)
        }
      }

  const counterReset = () => {
    setCounter(0)
  }



  return (
    <div className="App">
      <div className="counter"> 
        <h2 className={counter > 4 ? "five" : ""}> {counter} </h2>
      </div>


      <div> 
        <button className={counter < 5 ? "on" : "off"} onClick={counterPlus}> inc </button>
        <button className={counter < 1 ? "off" : "on"} onClick={counterReset}> reset </button>
        <button className={counter === 0 ? "off" : "on"} onClick={counterDecr}> decr </button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
      <div className="settings">
        <Settings />
      </div>
    </div>
  );
}

export default App;
