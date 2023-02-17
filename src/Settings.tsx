import React, {ChangeEvent, useEffect, useState} from "react";
import'./App.css';




function Settings() {

    // Кладет в localStorage:
    const [maxValue, setMaxValue] = useState<string>(JSON.parse(localStorage.getItem("MaxSettings") || '0'))
    const [startValue, setStartValue] = useState<string>(JSON.parse(localStorage.getItem("MinSettings") || '0'))

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    useEffect(() => {
        localStorage.setItem("MaxSettings", maxValue.toString())
    }, [maxValue])


    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }
    useEffect(() => {
        localStorage.setItem("MinSettings", startValue.toString())
    }, [startValue])

    return (
        <div className="Settings">
            <p> max value: </p> <input onChange={onChangeMaxValue} type="number" value={maxValue}/>
            <p> start value: </p> <input onChange={onChangeStartValue} type="number"  value={startValue}/>

            <button> set </button>
        </div>
    )
}

export default Settings;
