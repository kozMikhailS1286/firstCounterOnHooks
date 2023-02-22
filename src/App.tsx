import React, {ChangeEvent, useEffect, useState} from 'react';
import'./App.css';
import Settings from "./Settings";
import Counter from "./Counter"

function App() {

    const [maxValue, setMaxValue] = useState<string>(JSON.parse(localStorage.getItem("MaxSettings") || '0'))
    const [startValue, setStartValue] = useState<string>(JSON.parse(localStorage.getItem("MinSettings") || '0'))
    const [error, setError] = useState<string>('')
    const [errorIncr, serErrorIncr] = useState(false)
    const [settingsInit, setSettingsInit] = useState(false)
    let[counter, setCounter] = useState(0)


    useEffect(() => {
        localStorage.setItem("MaxSettings", maxValue.toString())
    }, [maxValue])

    useEffect(() => {
        localStorage.setItem("MinSettings", startValue.toString())
    }, [startValue])

    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsInit(false)
        setError('')
        const value = +e.currentTarget.value
        setStartValue(e.currentTarget.value)
        if(value < 0 || value >= JSON.parse(maxValue)) {
            setError('Incorrect value!')
            serErrorIncr(errorIncr)
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsInit(false)
        setError('')
        const value = +e.currentTarget.value
        setMaxValue(e.currentTarget.value)
        if(value < 0 || value <= JSON.parse(startValue) || JSON.parse(startValue) < 0 && JSON.parse(maxValue) >= -1) {
            setError('Incorrect value!')
            serErrorIncr(errorIncr)
        }
    }

    const counterIncr = () => {
        if (counter === JSON.parse(maxValue)) {
            setCounter(JSON.parse(maxValue));
            serErrorIncr(true)
            return
        }
        setCounter(counter + 1)
    }

    const counterReset = () => {
        setCounter(JSON.parse(startValue))
        serErrorIncr(!serErrorIncr)
    }

    const setSettings = () => {
        setSettingsInit(true)
        setCounter(JSON.parse(startValue))
    }


  return (
    <div className="App">
        <Settings    maxValue={maxValue}
                     onChangeMaxValue={onChangeMaxValue}
                     onChangeStartValue={onChangeStartValue}
                     setSettings={setSettings}
                     counter={counter}
                     error={error}
                     startValue={JSON.parse(startValue)}
        />
        <Counter     counter={counter}
                     isSettingsInit={settingsInit}
                     counterIncr={counterIncr}
                     counterReset={counterReset}
                     maxValue={JSON.parse(maxValue)}
                     startValue={JSON.parse(startValue)}
                     error={error}
                     errorIncr={errorIncr}
        />
    </div>
  );
}

export default App;
