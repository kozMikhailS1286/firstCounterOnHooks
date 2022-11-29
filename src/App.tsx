import React, {useState} from 'react';
import'./App.css';

function App() {

  let[counter, setCounter] = useState(0)

  const counterPlus = () => {
    setCounter(++counter)
    if (counter > 5) {
      setCounter(5);
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
      </div>

    </div>
  );
}

export default App;
