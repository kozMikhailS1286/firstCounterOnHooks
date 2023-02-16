import React, {ChangeEvent, useState} from "react";
import'./App.css';




function Settings() {

    const [value, setValue] = useState<string>("")

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const setToLocalStorageMax = () => {
        localStorage.setItem("MaxSettings", value.toString())
    }

    const setToLocalStorageMin = () => {
        localStorage.setItem("MinSettings", value.toString())
    }

    return (
        <div className="Settings">
            <p> max value: </p> <input onChange={onChangeMax} type="number" id={"max"} />
            <button onClick={setToLocalStorageMax}> set max </button>
            <p> min value: </p> <input onChange={onChangeMin} type="number" id={"min"}/>
            <button onClick={setToLocalStorageMin}> set min </button>
        </div>
    )
}

export default Settings;
