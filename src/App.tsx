import React, {ChangeEvent, useState} from 'react';
import'./App.css';
import Settings from "./Settings";
import Counter from "./Counter"

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [error, setError] = useState<string>('')
    const [errorIncr, serErrorIncr] = useState(false)
    const [settingsInit, setSettingsInit] = useState(false)
    let[counter, setCounter] = useState(0)



    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsInit(false)
        setError('')
        const value = +e.currentTarget.value
        setStartValue(value)
        if(value < 0 || value >= maxValue) {
            setError('Incorrect value!')
            serErrorIncr(errorIncr)
        }
    }

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setSettingsInit(false)
        setError('')
        const value = +e.currentTarget.value
        setMaxValue(value)
        if(value < 0 || value <= startValue || startValue < 0 && maxValue >= -1) {
            setError('Incorrect value!')
            serErrorIncr(errorIncr)
        }
    }

    const counterIncr = () => {
        if (counter === maxValue) {
            setCounter(maxValue);
            serErrorIncr(true)
            return
        }
        setCounter(counter + 1)
    }

    const counterReset = () => {
        setCounter(startValue)
        serErrorIncr(!serErrorIncr)
    }

    const setSettings = () => {
        setSettingsInit(true)
        setCounter(startValue)
    }


  return (
    <div className="App">
        <Settings    maxValue={maxValue}
                     onChangeMaxValue={onChangeMaxValue}
                     onChangeStartValue={onChangeStartValue}
                     setSettings={setSettings}
                     counter={counter}
                     error={error}
                     startValue={startValue}
        />
        <Counter     counter={counter}
                     isSettingsInit={settingsInit}
                     counterIncr={counterIncr}
                     counterReset={counterReset}
                     maxValue={maxValue}
                     startValue={startValue}
                     error={error}
                     errorIncr={errorIncr}
        />
    </div>
  );
}

export default App;
