import React from "react";
import'./App.css';
import s from "./App.module.css"


type CounterType = {
    counter: number
    counterIncr: () => void
    counterReset: () => void

    isSettingsInit : boolean
    maxValue: number
    startValue: number
    error: string
    errorIncr: boolean
}
function Counter (props: CounterType) {


    let counterStatus = 'default'

    if (props.error) {
        counterStatus = props.error
    }else {
        if (!props.isSettingsInit) {
            counterStatus = 'please press set to continue'
        }
        else if (String(props.counter)) {
            counterStatus = String(props.counter)
        }
    }

return (
    <div className={s.counter}>
        <div className={s.monitor}>
            <h2 className={props.counter > props.maxValue - 1 && props.counter != 0 ? "maxValue" : ""}>
                {
                    counterStatus
                }
            </h2>
        </div>
        <div className={s.buttons}>
            <button className={props.counter === props.maxValue ? "off" : "on"}
                    onClick={props.counterIncr}
                    disabled={props.counter === props.maxValue || props.startValue < 0}>
                inc
            </button>
            <button className={props.counter < 1 ? "off" : "on"}
                    onClick={props.counterReset}
                    disabled={!!props.error}>
                reset
            </button>
        </div>
    </div>
)
}

export default Counter;