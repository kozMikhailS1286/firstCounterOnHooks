import React, {useState} from "react";
import'./App.css';


type CounterType = {
    counter: number
    counterIncr: () => void
    counterReset: () => void
}
function Counter (props: CounterType) {



return (
    <div className="App">
        <div className="counter">
            <h2 className={props.counter > 4 ? "five" : ""}> {props.counter} </h2>
        </div>
        <div>
            <button className={props.counter < 5 ? "on" : "off"} onClick={props.counterIncr}> inc </button>
            <button className={props.counter < 1 ? "off" : "on"} onClick={props.counterReset}> reset </button>
        </div>
    </div>
)
}

export default Counter;