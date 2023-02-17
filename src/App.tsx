import React, {useState} from 'react';
import'./App.css';
import Settings from "./Settings";
import Counter from "./Counter"

function App() {

  return (
    <div className="App">
        <Settings />
        <Counter />
    </div>
  );
}

export default App;
