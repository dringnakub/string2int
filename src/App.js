import React, { useState } from 'react';
import './App.css';


const checkint = (val) => {
  return +val;
}

const stringToArray = (str) => {
  console.log("str", str)
  let strArray = []
  for (let i = 0; i < str.length; i++) {
    strArray.push(str[i])
  }
  return strArray;
}

function App() {

  const [state, setState] = useState("")
  const stringToInt = (event) => {
    event.preventDefault();
    let a = stringToArray(state);
    let result = ""
    for (let index = 0; index < a.length; index++) {
      let element = a[index];
      if (checkint(element)) {
        result += element
      }
    }

    console.log("result ", +result)
    console.log("result ", typeof (+result))
    setState(`Value : ${+result} Type : ${typeof (+result)}`);

  }

  const handleChange = (e) => {
    setState(e.target.value)
  }

  return (
    <div>
      <h1>String2Int</h1>
      <form onSubmit={stringToInt}>
        <label>Input</label>
        <input type="text" name="stringToInt" id="stringToInt" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>{state}</h3>
    </div>
  );
}

export default App;
