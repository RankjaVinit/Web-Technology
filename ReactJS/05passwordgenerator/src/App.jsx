import { useCallback, useState } from 'react';
import './App.css'

function App() {

  const [length, setLength] = useState(8);

  const [number, setNumber] = useState(false);

  const [specialChar, setSpecialChar] = useState(false);
  
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () => {
    let password = '';

    let string =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if(number) string += '0123456789';
    if(specialChar) string += '!@#$%^&*()-_=+[]{};:"\'\\|/?,<>~`'

    for(let i = 0 ; i < length ; i++){
      password += string.charAt( Math.floor(Math.random() * (string.length() + 1 ) ) );
    }

    setPassword(password);

  }, [length, number, specialChar, setPassword]);


  return (
    <>
      <h1 className="text-4xl font-bold text-center text-slate-50">
        Password Generator
      </h1>

      <div className="m-16 flex flex-col justify-center items-center">

        <div className="p-3 rounded-lg">

          <input 
            className="w-96 rounded-lg bg-neutral-700 p-3 border-0 outline-0 drop-shadow-xl"
            type="text"
            value={password}
            readOnly
          />
          
        </div>

        <div className="pt-5 rounded-lg space-x-7 flex">

          <div className='flex space-x-1'>
            <div className="text-slate-50">
              {length}
            </div>
            <input 
              type="range" 
              min="5" 
              max="50" 
              onChange={(e) => {
                console.log(e.target.value);
                setLength(e.target.value);
              }}
              value={length}
            />
          </div>


          <div className='flex space-x-2'>
            <input 
              type="radio" 
              onChange={(e) => {
                console.log(e.target.value);
                setNumber(e.target.value);
              }}
              value={number}
            />
            <div className="text-slate-50">
              Number
            </div>
          </div>

          <div className='flex space-x-2'>
            <input 
              type="radio" 
              onChange={(e) => {
                console.log(e.target.value);
                setSpecialChar(e.target.value);
              }}
              value={specialChar}
            />
            <div className="text-slate-50">
              Special Characters
            </div>
          </div>
          

        </div>

      </div>

    </>
  )
}

export default App
