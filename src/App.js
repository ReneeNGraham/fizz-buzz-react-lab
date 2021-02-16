import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState(1);
  const [answer, setAnswer] = useState("")
  const [fizzCounter, setFizzCounter] = useState(0)
  const [buzzCounter, setBuzzCounter] = useState(0)
  const [fizzBuzzCounter, setFizzBuzzCounter] = useState(0)

useEffect(() =>{
  console.log("user effect triggered")
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    setAnswer("fizzbuzz")
    setFizzBuzzCounter (fizzBuzzCounter + 1)
  } else if (inputNumber % 3 === 0) {
    setAnswer("fizz")
    setFizzCounter (fizzCounter + 1)
  } else if (inputNumber % 5 === 0) {
    setAnswer("buzz")
    setBuzzCounter (buzzCounter +1)
  } else {
    setAnswer(inputNumber);
  }

},[inputNumber])

  const handleInc = () => {
      setInputNumber(inputNumber + 1);
  }

  const handleGuess = (event) => {
       event.preventDefault()
       
       console.log(event.target.value)
  }

  return ( 
    <div>
      <button value={inputNumber} onClick={handleInc}>+</button>
      <form onSubmit={handleGuess}>
      <input type="text" placeholder="enter your guess"/>
      <input type="submit" value="submit guess"/>
      </form>
     <h2>fizzCounter is {fizzCounter}</h2>
     <h2>buzzCounter is {buzzCounter}</h2>
     <h2>fizzBuzzCounter is {fizzBuzzCounter}</h2>
      <h2>Number is {inputNumber}</h2>
      <h2>Answer is {answer}</h2>
    </div>
  );
}

export default App;
