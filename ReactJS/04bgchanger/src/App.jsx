import { useState } from 'react'
import './App.css'

function App() {

  let [color, setColor] = useState('black');

  return (
    <>
      <div className='background' style={{backgroundColor: color}}>
          <div className='bar bg-slate-300'>
            <Button setColor={setColor} color='black' />
            <Button setColor={setColor} color='red' />
            <Button setColor={setColor} color='green' />
            <Button setColor={setColor} color='yellow' />
            <Button setColor={setColor} color='orange' />
            <Button setColor={setColor} color='blue' />
          </div>
      </div>
    </>
  )
}

function Button( param ){
    return(
      <>
        <button className='button' onClick={ () => {
          param.setColor(param.color)
        } } style={{ backgroundColor: param.color }}>
          {param.color}
        </button>
      </>
    )
}

export default App
