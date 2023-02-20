import React, {ChangeEvent} from "react";
import'./App.css';


type SettingsType = {
    counter: number
    maxValue: string
    startValue: string
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
    setSettings: () => void
    error: string
}



function Settings(props: SettingsType) {
    let counter = props.counter.toString()
    let startValue = JSON.parse(props.startValue)


    return (
        <div className="Settings">
            <p> max value: </p> <input onChange={props.onChangeMaxValue} type="number" value={props.maxValue}/>
            <p> start value: </p> <input
                                        className={startValue < 0 ? "maxValue" : " "}
                                        onChange={props.onChangeStartValue}
                                        type="number"
                                        value={props.startValue}
        />

            <button disabled={!!props.error} className={counter < props.maxValue ? "on" : "off"} onClick={props.setSettings}> set </button>
        </div>
    )
}

export default Settings;
