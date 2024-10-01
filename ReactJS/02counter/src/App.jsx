import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div> Counter </div>
      <br/> 
      <button onClick = { () => { 
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        setCount(prevCounter => prevCounter + 1);
        setCount(prevCounter => prevCounter + 1);
        setCount(prevCounter => prevCounter + 1);
        setCount(prevCounter => prevCounter + 1);

      } } > Value = {count} + 1 </button>
      <br />
      <button onClick = { () => { setCount(count - 1) } } > Value = {count} - 1 </button>
      <br/> 
      <div> Value :  {count} </div>
    </>
  )
}

export default App
