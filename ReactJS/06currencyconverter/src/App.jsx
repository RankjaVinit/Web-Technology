import { useEffect, useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrrencyInfo';
import './App.css'


function App() {
  
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');

  const allConversionRates = useCurrencyInfo(from);
  
  const option = Object.keys(allConversionRates);

  const [rate, setRate] = useState(allConversionRates[to]);
  
  const swap = () => {
    setConvertedAmount(amount);
    setAmount(convertedAmount);

    setFrom(to);
    setTo(from);

    setRate(1/rate);
  }

  const changeFrom = (currency) => {
    setFrom(currency);
  }

  const changeTo = (currency) => {
    setTo(currency);
    setRate(allConversionRates[currency]);
    setConvertedAmount(amount * rate);
  }
  
  const updateAmount = (amount) => {
    setAmount(amount);
    setConvertedAmount(amount * rate);
  }

  // const convert = () => {
  //   setConvertedAmount(amount * rate);
  // }

  

  return (
    <>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 d-flex justify-content-center align-items-center"> 
            <img src="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Currency Conversion" className="img-fluid" />
          </div>
          <div className="col-6 d-flex flex-column gap-2 justify-content-center align-items-center">
            <InputBox 
              name="from"
              amount={amount}
              setAmount={updateAmount}
              currency={from}
              setOption={changeFrom}
              options = {option}
            />

            <button
              className='btn btn-success btn-lg rounded-pill shadow-sm px-4 py-2 fw-bold text-white border-0 transition-all'
              onClick={swap}
            >Swap</button>

            <InputBox 
              name="to"
              amount={convertedAmount}
              setAmount={setConvertedAmount}
              currency={to}
              setOption={changeTo}
              options = {option}
              isDisabled
            />

            {/* <button
                className='btn btn-success btn-lg rounded-pill shadow-sm px-4 py-2 fw-bold text-white border-0 transition-all'
                onClick={convert}
            >
                Convert '{from.toUpperCase()}' to '{to.toUpperCase()}'
            </button> */}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
