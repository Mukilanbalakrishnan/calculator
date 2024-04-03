import react,{useState} from "react";
import './App.css';

function App() {
  const [number, setNumber]=useState();
  const [number2, setNumber2]=useState();
  const[total,setTotal]=useState(number+number2);
  function addtotal() {
    setTotal(number+number2)
  }
  function subtotal() {
    setTotal(number-number2)
  }
  function multotal() {
    setTotal(number*number2)
  }
  function divtotal() {
    setTotal(number/number2)
  }
  return (
    <div className="App">
      <h1>calculator</h1>
      <div className="input-numbers">
      <input type="number" placeholder="0" value={number} onChange ={e => setNumber(+e.target.value)}/>
      <input type="number" placeholder="0"  value={number2} onChange ={e => setNumber2(+e.target.value)}/>
      </div>
      <button onClick={addtotal}>addition</button>
      <button onClick={subtotal}>subraction</button>
      <button onClick={multotal}>multiplication</button>
      <button onClick={divtotal}>division</button>
      <h2>{total}</h2>
      
    </div>
  );
}

export default App;
