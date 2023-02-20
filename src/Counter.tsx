import React from "react";
import'./App.css';


type CounterType = {
    counter: number
    counterIncr: () => void
    counterReset: () => void
    maxValue: number
    error: string
}
function Counter (props: CounterType) {

return (
    <div className="App">
        <div className="counter">
            <h2 className={props.counter > props.maxValue - 1 && props.counter != 0 ? "maxValue" : ""}>
                {
                    props.error ?  props.error : props.counter < 0 ? "No" : props.counter
                }
            </h2>
        </div>
        <div>
            <button className={props.counter < props.maxValue ? "on" : "off"} onClick={props.counterIncr}> inc </button>
            <button className={props.counter < 1 ? "off" : "on"} onClick={props.counterReset}> reset </button>
        </div>
    </div>
)
}

export default Counter;