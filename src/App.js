import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [age, setAge]=useState(0)
  const [min, setMin]=useState(0)
  const [max, setMax]=useState(0)

  function calculate(){
    setMin((220-age)*0.65)
    setMax((220-age)*0.85)
  }
  return (
    <div>
      <h3>Check your heart limits</h3>
      <form>
        <div>
          <label>Age</label>
          <input type="number" value={age} onChange={e=>setAge(e.target.value)} />
        </div>
        <div>
          <label>Heart rate limits</label>
          <output>{min.toFixed(0)} - {max.toFixed(0)}</output>
        </div>
        <button type="button" onClick={calculate}>Calculate</button> 
      </form>
    </div>
  )
}

export default App;
