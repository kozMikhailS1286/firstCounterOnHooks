import React, {ChangeEvent, useState} from "react";
import'./App.css';




function Settings() {

    // Кладет в localStorage:
    const [valueMax, setValueMax] = useState<string>(JSON.parse(localStorage.getItem("MaxSettings") || '0'))
    const [valueMin, setValueMin] = useState<string>(JSON.parse(localStorage.getItem("MinSettings") || '0'))

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMax(e.currentTarget.value)
    }
    const setToLocalStorageMax = () => {
        localStorage.setItem("MaxSettings", valueMax.toString())
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setValueMin(e.currentTarget.value)
    }
    const setToLocalStorageMin = () => {
        localStorage.setItem("MinSettings", valueMin.toString())
    }


    console.log(valueMax)
    console.log(valueMin)


    return (
        <div className="Settings">
            <p> max value: </p> <input onChange={onChangeMax} type="number" value={valueMax}/>
            <button onClick={setToLocalStorageMax}> set max </button>
            <p> min value: </p> <input onChange={onChangeMin} type="number"  value={valueMin}/>
            <button onClick={setToLocalStorageMin}> set min </button>
        </div>
    )
}

export default Settings;
