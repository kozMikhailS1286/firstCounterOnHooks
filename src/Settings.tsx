import React, {ChangeEvent} from "react";
import './App.css';
import s from "./App.module.css"


type SettingsType = {
    counter: number
    maxValue: number
    startValue: number
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setSettings: () => void
    error: string
}



function Settings(props: SettingsType) {
    let counter = props.counter
    let startValue = props.startValue


    return (
        <div className={s.settings}>

            <p> max value: </p> <input  onChange={props.onChangeMaxValue}
                                        type="number"
                                        value={props.maxValue}
        />
            <p> start value: </p> <input
                                        className={startValue < 0 ? "maxValue" : " "}
                                        onChange={props.onChangeStartValue}
                                        type="number"
                                        value={props.startValue}
        />
        <br/>
            <button disabled={!!props.error || props.startValue < 0}
                    className={counter < props.maxValue + 1 ? "on" : "off"}
                    onClick={props.setSettings}>
                set
            </button>
        </div>
    )
}

export default Settings;
