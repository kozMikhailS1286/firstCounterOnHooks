import React, {ChangeEvent, useEffect, useState} from 'react';
import'./App.css';
import Settings from "./Settings";
import Counter from "./Counter"

function App() {

    // Ниже все относится к Settings
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
    // Выше все относится к Settings



    // Ниже все относится к Counter
    let[counter, setCounter] = useState(0)

    const counterIncr = () => {
        setCounter(++counter)
        if (counter > JSON.parse(maxValue)) {
            setCounter(JSON.parse(maxValue));
        }
    }

    const counterReset = () => {
        setCounter(0)
    }
    // Выше все относится к Counter



    // Ниже все для обмена инофмацией между компонентами.
    const setSettings = () => {
        setCounter(JSON.parse(startValue))
    }
    // Выше все для обмена инофмацией между компонентами.

  return (
    <div className="App">
        <Settings    maxValue={maxValue}
                     startValue={startValue}
                     onChangeMaxValue={onChangeMaxValue}
                     onChangeStartValue={onChangeStartValue}
                     setSettings={setSettings}
                     counter={counter}

        />
        <Counter     counter={counter}
                     counterIncr={counterIncr}
                     counterReset={counterReset}
                     maxValue={JSON.parse(maxValue)}
        />
    </div>
  );
}

export default App;
