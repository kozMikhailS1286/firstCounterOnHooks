import React, {ChangeEvent, useEffect, useState} from "react";
import'./App.css';


type SettingsType = {
    maxValue: string
    startValue: string
    onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeStartValue: (e: ChangeEvent<HTMLInputElement>) => void
}

function Settings(props: SettingsType) {

    return (
        <div className="Settings">
            <p> max value: </p> <input onChange={props.onChangeMaxValue} type="number" value={props.maxValue}/>
            <p> start value: </p> <input onChange={props.onChangeStartValue} type="number"  value={props.startValue}/>

            <button> set </button>
        </div>
    )
}

export default Settings;
